import Contact from '../models/Contact.js';
import { sendEmail } from '../utils/emailService.js';
import { asyncHandler } from '../utils/asyncHandler.js';

// @desc    Submit contact form
// @route   POST /api/contact/submit
// @access  Public
export const submitContact = asyncHandler(async (req, res) => {
  const { name, email, subject, message } = req.body;

  // Get client IP and user agent
  const ipAddress = req.ip || req.connection.remoteAddress;
  const userAgent = req.get('User-Agent');

  // Create contact entry
  const contact = await Contact.create({
    name,
    email,
    subject: subject || 'Portfolio Contact',
    message,
    ipAddress,
    userAgent,
  });

  // Send notification email (optional)
  try {
    await sendEmail({
      to: process.env.EMAIL_FROM,
      subject: `New Portfolio Contact: ${subject || 'No Subject'}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject || 'No Subject'}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
        <hr>
        <p><small>Submitted at: ${new Date().toLocaleString()}</small></p>
      `,
    });
  } catch (emailError) {
    console.error('Email notification failed:', emailError);
    // Don't fail the request if email fails
  }

  res.status(201).json({
    success: true,
    message: 'Message sent successfully! I will get back to you soon.',
    data: {
      id: contact._id,
      name: contact.name,
      email: contact.email,
      subject: contact.subject,
      createdAt: contact.createdAt,
    },
  });
});

// @desc    Get all contacts
// @route   GET /api/contact
// @access  Private (Admin)
export const getContacts = asyncHandler(async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const skip = (page - 1) * limit;

  const contacts = await Contact.find()
    .sort({ createdAt: -1 })
    .skip(skip)
    .limit(limit);

  const total = await Contact.countDocuments();
  const unreadCount = await Contact.countDocuments({ isRead: false });

  res.status(200).json({
    success: true,
    data: contacts,
    pagination: {
      page,
      limit,
      total,
      pages: Math.ceil(total / limit),
    },
    unreadCount,
  });
});

// @desc    Mark contact as read
// @route   PATCH /api/contact/:id/read
// @access  Private (Admin)
export const markAsRead = asyncHandler(async (req, res) => {
  const contact = await Contact.findByIdAndUpdate(
    req.params.id,
    { isRead: true },
    { new: true }
  );

  if (!contact) {
    return res.status(404).json({
      success: false,
      message: 'Contact not found',
    });
  }

  res.status(200).json({
    success: true,
    message: 'Contact marked as read',
    data: contact,
  });
});

// @desc    Delete contact
// @route   DELETE /api/contact/:id
// @access  Private (Admin)
export const deleteContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findByIdAndDelete(req.params.id);

  if (!contact) {
    return res.status(404).json({
      success: false,
      message: 'Contact not found',
    });
  }

  res.status(200).json({
    success: true,
    message: 'Contact deleted successfully',
  });
});