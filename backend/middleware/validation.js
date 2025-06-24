import Joi from 'joi';

// Contact form validation
export const validateContact = (req, res, next) => {
  const schema = Joi.object({
    name: Joi.string()
      .trim()
      .min(2)
      .max(100)
      .required()
      .messages({
        'string.empty': 'Name is required',
        'string.min': 'Name must be at least 2 characters',
        'string.max': 'Name cannot exceed 100 characters',
      }),
    email: Joi.string()
      .email()
      .required()
      .messages({
        'string.email': 'Please provide a valid email address',
        'string.empty': 'Email is required',
      }),
    subject: Joi.string()
      .trim()
      .max(200)
      .allow('')
      .messages({
        'string.max': 'Subject cannot exceed 200 characters',
      }),
    message: Joi.string()
      .trim()
      .min(10)
      .max(1000)
      .required()
      .messages({
        'string.empty': 'Message is required',
        'string.min': 'Message must be at least 10 characters',
        'string.max': 'Message cannot exceed 1000 characters',
      }),
  });

  const { error } = schema.validate(req.body);
  
  if (error) {
    return res.status(400).json({
      success: false,
      message: 'Validation error',
      errors: error.details.map(detail => ({
        field: detail.path[0],
        message: detail.message,
      })),
    });
  }

  next();
};

// Project validation
export const validateProject = (req, res, next) => {
  const schema = Joi.object({
    title: Joi.string()
      .trim()
      .min(3)
      .max(100)
      .required()
      .messages({
        'string.empty': 'Project title is required',
        'string.min': 'Title must be at least 3 characters',
        'string.max': 'Title cannot exceed 100 characters',
      }),
    description: Joi.string()
      .trim()
      .min(10)
      .max(500)
      .required()
      .messages({
        'string.empty': 'Project description is required',
        'string.min': 'Description must be at least 10 characters',
        'string.max': 'Description cannot exceed 500 characters',
      }),
    longDescription: Joi.string()
      .trim()
      .max(2000)
      .allow('')
      .messages({
        'string.max': 'Long description cannot exceed 2000 characters',
      }),
    technologies: Joi.array()
      .items(Joi.string().trim())
      .default([]),
    images: Joi.array()
      .items(
        Joi.object({
          url: Joi.string().uri().required(),
          alt: Joi.string().allow(''),
        })
      )
      .default([]),
    liveUrl: Joi.string()
      .uri()
      .allow('')
      .messages({
        'string.uri': 'Live URL must be a valid URL',
      }),
    githubUrl: Joi.string()
      .uri()
      .allow('')
      .messages({
        'string.uri': 'GitHub URL must be a valid URL',
      }),
    category: Joi.string()
      .valid('web', 'mobile', 'desktop', 'api', 'other')
      .default('web'),
    status: Joi.string()
      .valid('completed', 'in-progress', 'planned')
      .default('completed'),
    featured: Joi.boolean().default(false),
    order: Joi.number().integer().min(0).default(0),
  });

  const { error, value } = schema.validate(req.body);
  
  if (error) {
    return res.status(400).json({
      success: false,
      message: 'Validation error',
      errors: error.details.map(detail => ({
        field: detail.path[0],
        message: detail.message,
      })),
    });
  }

  req.body = value;
  next();
};