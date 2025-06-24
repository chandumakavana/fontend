import express from 'express';
import { submitContact, getContacts, markAsRead, deleteContact } from '../controllers/contactController.js';
import { validateContact } from '../middleware/validation.js';
import { contactRateLimit } from '../middleware/rateLimiting.js';

const router = express.Router();

// Public routes
router.post('/submit', contactRateLimit, validateContact, submitContact);

// Admin routes (you can add authentication middleware later)
router.get('/', getContacts);
router.patch('/:id/read', markAsRead);
router.delete('/:id', deleteContact);

export default router;