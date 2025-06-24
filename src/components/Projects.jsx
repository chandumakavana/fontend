import React, { useState, useEffect } from 'react';
import { projectsAPI } from '../services/api';
import { FaGithub, FaExternalLinkAlt, FaSpinner } from 'react-icons/fa';

function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      setLoading(true);
      const response = await projectsAPI.getAll();
      setProjects(response.data || []);
    } catch (err) {
      setError(err.message || 'Failed to load projects');
    } finally {
      setLoading(false);
    }
  };

  const filteredProjects = projects.filter(project => 
    filter === 'all' || project.category === filter
  );

  const categories = ['all', 'web', 'mobile', 'desktop', 'api'];

  if (loading) {
    return (
      <div className='px-15 max-md:px-5 py-20' id='project'>
        <div className='flex justify-center items-center h-64'>
          <FaSpinner className='animate-spin text-4xl text-yellow-400' />
        </div>
      </div>
    );
  }

  return (
    <div className='px-15 max-md:px-5 py-20' id='project'>
      <h1 className='uppercase text-5xl text-center font-bold'>Projects</h1>
      <div className='flex flex-col items-center mb-10'>
        <hr className='w-[20vw] max-md:w-[50vw] border-gray-400 mt-2' />
        <hr className='w-[8vw] max-md:w-[20vw] border-2 -translate-y-0.5 rounded-2xl border-yellow-400' />
      </div>

      {/* Filter Buttons */}
      <div className='flex justify-center mb-10 flex-wrap gap-4'>
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className={`px-6 py-2 rounded-full font-semibold transition-all ${
              filter === category
                ? 'bg-yellow-400 text-gray-800'
                : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
            }`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      {error && (
        <div className='text-center text-red-500 mb-10'>
          <p>{error}</p>
          <button 
            onClick={fetchProjects}
            className='mt-4 px-6 py-2 bg-yellow-400 text-gray-800 rounded-lg hover:bg-yellow-500'
          >
            Try Again
          </button>
        </div>
      )}

      {filteredProjects.length === 0 && !loading && !error ? (
        <div className='text-center py-20'>
          <h3 className='text-2xl text-gray-600 mb-4'>No Projects Found</h3>
          <p className='text-gray-500'>
            {filter === 'all' 
              ? 'No projects have been added yet.' 
              : `No projects found in the "${filter}" category.`
            }
          </p>
        </div>
      ) : (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {filteredProjects.map(project => (
            <div key={project._id} className='bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow'>
              {project.images && project.images.length > 0 && (
                <img 
                  src={project.images[0].url} 
                  alt={project.images[0].alt || project.title}
                  className='w-full h-48 object-cover'
                />
              )}
              
              <div className='p-6'>
                <div className='flex justify-between items-start mb-3'>
                  <h3 className='text-xl font-bold text-gray-800'>{project.title}</h3>
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    project.status === 'completed' ? 'bg-green-100 text-green-800' :
                    project.status === 'in-progress' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {project.status}
                  </span>
                </div>
                
                <p className='text-gray-600 mb-4 line-clamp-3'>{project.description}</p>
                
                {project.technologies && project.technologies.length > 0 && (
                  <div className='mb-4'>
                    <div className='flex flex-wrap gap-2'>
                      {project.technologies.slice(0, 4).map((tech, index) => (
                        <span key={index} className='px-2 py-1 bg-gray-100 text-gray-700 text-sm rounded'>
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className='px-2 py-1 bg-gray-100 text-gray-700 text-sm rounded'>
                          +{project.technologies.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>
                )}
                
                <div className='flex gap-4'>
                  {project.liveUrl && (
                    <a 
                      href={project.liveUrl} 
                      target='_blank' 
                      rel='noopener noreferrer'
                      className='flex items-center gap-2 px-4 py-2 bg-yellow-400 text-gray-800 rounded-lg hover:bg-yellow-500 transition-colors'
                    >
                      <FaExternalLinkAlt size={14} />
                      Live Demo
                    </a>
                  )}
                  
                  {project.githubUrl && (
                    <a 
                      href={project.githubUrl} 
                      target='_blank' 
                      rel='noopener noreferrer'
                      className='flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors'
                    >
                      <FaGithub size={14} />
                      Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Projects;