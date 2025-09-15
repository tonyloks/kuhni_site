"use client";

import React, { useState } from 'react';
import Image from 'next/image';

interface Project {
  id: string;
  mainImage: string;
  title: string;
  price: string;
  description: string;
  hoverText: string;
  gallery: { description: string; src: string }[];
  details: { name: string; value: string }[];
}

const Works = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 'project-1',
      mainImage: '/images/works/project_1/main.png',
      title: 'Угловая кухня в скандинавском стиле',
      price: '140 000 ₽',
      description: 'Современная угловая кухня с минималистичным дизайном. Светлые фасады МДФ с эмалью, практичная столешница и удобная система хранения.',
      hoverText: 'Ознакомиться с проектом',
      gallery: [
        { description: 'Общий вид кухни', src: '/images/works/project_1/main.png' },
        { description: 'Рабочая зона', src: '/images/works/project_1/2.png' },
        { description: 'Фурнитура и ящики', src: '/images/works/project_1/3.png' }
      ],
      details: [
        { name: 'Материал фасадов', value: 'МДФ, эмаль' },
        { name: 'Столешница', value: 'Пластиковая' },
        { name: 'Фурнитура', value: 'Hettich' },
        { name: 'Размеры', value: '3200x1800 мм' },
        { name: 'Стоимость', value: '140 000 ₽' },
        { name: 'Срок изготовления', value: '4 недели' }
      ]
    },
    {
      id: 'project-2',
      mainImage: '/images/hero/hero-main.jpg',
      title: 'Прямая кухня в стиле лофт',
      price: '85 000 ₽',
      description: 'Стильная прямая кухня в индустриальном стиле. Темные фасады ЛДСП Egger, металлическая фурнитура и минималистичный дизайн.',
      hoverText: 'Ознакомиться с проектом',
      gallery: [
        { description: 'Общий вид кухни', src: '/images/hero/hero-main.jpg' },
        { description: 'Детали фасадов', src: '/images/hero/hero-main.jpg' }
      ],
      details: [
        { name: 'Материал фасадов', value: 'ЛДСП Egger' },
        { name: 'Столешница', value: 'Пластик' },
        { name: 'Фурнитура', value: 'Boyard' },
        { name: 'Размеры', value: '3000 мм' },
        { name: 'Стоимость', value: '85 000 ₽' },
        { name: 'Срок изготовления', value: '3 недели' }
      ]
    },
    {
      id: 'project-3',
      mainImage: '/images/hero/hero-main.jpg',
      title: 'Кухня с островом из массива',
      price: '350 000 ₽',
      description: 'Премиальная кухня с островом из натурального массива ясеня. Искусственный камень столешницы, премиальная фурнитура Blum.',
      hoverText: 'Ознакомиться с проектом',
      gallery: [
        { description: 'Общий вид кухни с островом', src: '/images/hero/hero-main.jpg' },
        { description: 'Крупный план острова', src: '/images/hero/hero-main.jpg' },
        { description: 'Фасады из массива', src: '/images/hero/hero-main.jpg' },
        { description: 'Системы хранения', src: '/images/hero/hero-main.jpg' }
      ],
      details: [
        { name: 'Материал фасадов', value: 'Массив ясеня' },
        { name: 'Столешница', value: 'Искусственный камень' },
        { name: 'Фурнитура', value: 'Blum' },
        { name: 'Размеры', value: '4500x2200 мм + остров 1200x800 мм' },
        { name: 'Стоимость', value: '350 000 ₽' },
        { name: 'Срок изготовления', value: '7 недель' }
      ]
    }
  ];

  const openProject = (project: Project) => {
    setSelectedProject(project);
  };

  const closeProject = () => {
    setSelectedProject(null);
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
          .works-section {
            padding: 80px 0;
            background: var(--lm-bg-alt, #f8f9fa);
            color: var(--lm-text);
          }

          .works-section__title {
            font-family: "DM Serif Display", ui-serif, Georgia, serif;
            color: var(--lm-heading);
            font-size: clamp(2rem, 2.5vw + 1rem, 2.5rem);
            line-height: 1.2;
            margin: 0 0 2rem;
            text-align: center;
          }

          .works-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
            gap: 2rem;
            margin-top: 3rem;
          }

          .work-item {
            background: var(--lm-card-bg, white);
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            cursor: pointer;
            position: relative;
          }

          .work-item:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
          }

          .work-item__image {
            position: relative;
            height: 280px;
            overflow: hidden;
          }

          .work-item__price-badge {
            position: absolute;
            top: 1rem;
            right: 1rem;
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(10px);
            padding: 0.5rem 0.75rem;
            border-radius: 8px;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
            border: 1px solid rgba(255, 255, 255, 0.2);
            z-index: 2;
          }

          .work-item__price-badge-text {
            font-family: "Source Sans 3", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif;
            font-size: 0.875rem;
            font-weight: 600;
            color: var(--lm-heading, #111827);
            margin: 0;
            white-space: nowrap;
          }

          .work-item__overlay {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            background: linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.4) 50%, transparent 100%);
            display: flex;
            align-items: flex-end;
            justify-content: center;
            padding: 2rem 1rem 1rem;
            z-index: 1;
            opacity: 0;
            transition: opacity 0.3s ease;
          }

          .work-item:hover .work-item__overlay {
            opacity: 1;
          }

          .work-item__overlay-text {
            color: white;
            font-family: "Source Sans 3", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif;
            font-size: 0.875rem;
            font-weight: 600;
            text-align: center;
            text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
          }

          .work-item__content {
            padding: 1.5rem;
            display: flex;
            flex-direction: column;
            gap: 1rem;
            flex: 1;
          }

          .work-item__title {
            font-family: "DM Serif Display", ui-serif, Georgia, serif;
            font-size: 1.25rem;
            margin: 0;
            color: var(--lm-heading);
            font-weight: 700;
          }

          .work-item__description {
            font-family: "Source Sans 3", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif;
            font-size: 0.875rem;
            line-height: 1.5;
            color: var(--lm-text);
            margin: 0;
            font-weight: 600;
          }

          .work-item__actions {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 1rem;
          }

          .work-item__button {
            flex-shrink: 0;
          }

          /* Modal styles */
          .modal-overlay {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.8);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 1000;
            padding: 2rem;
          }

          .modal-content {
            background: white;
            border-radius: 12px;
            max-width: 800px;
            max-height: 90vh;
            overflow-y: auto;
            width: 100%;
            position: relative;
          }

          .modal-close {
            position: absolute;
            top: 1rem;
            right: 1rem;
            background: none;
            border: none;
            font-size: 2rem;
            cursor: pointer;
            z-index: 1001;
            color: #666;
          }

          .modal-header {
            padding: 2rem;
            border-bottom: 1px solid #eee;
          }

          .modal-title {
            font-family: "DM Serif Display", ui-serif, Georgia, serif;
            font-size: 1.75rem;
            margin: 0 0 0.5rem;
            color: var(--lm-heading);
          }

          .modal-price {
            font-family: "Source Sans 3", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif;
            font-size: 1.25rem;
            font-weight: 600;
            color: var(--lm-accent, #007bff);
            margin: 0;
          }

          .modal-gallery {
            padding: 2rem;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 1rem;
          }

          .gallery-image {
            position: relative;
            height: 150px;
            border-radius: 8px;
            overflow: hidden;
          }

          .modal-details {
            padding: 0 2rem 2rem;
          }

          .details-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 1rem;
          }

          .detail-item {
            display: flex;
            justify-content: space-between;
            padding: 0.75rem;
            background: #f8f9fa;
            border-radius: 6px;
          }

          .detail-name {
            font-weight: 600;
            color: var(--lm-heading);
          }

          .detail-value {
            color: var(--lm-text);
          }

          @media (max-width: 768px) {
            .works-section {
              padding: 56px 8px;
            }

            .works-grid {
              grid-template-columns: 1fr;
              gap: 1.5rem;
            }

            .modal-overlay {
              padding: 1rem;
            }

            .modal-gallery {
              grid-template-columns: 1fr;
            }

            .details-grid {
              grid-template-columns: 1fr;
            }
          }
        `
      }} />
      <section className="works-section">
        <div className="layout-container">
          <h2 className="works-section__title">Наши работы</h2>
          <div className="works-grid">
            {projects.map((project) => (
              <div key={project.id} className="work-item" onClick={() => openProject(project)}>
                <div className="work-item__image">
                  <Image
                    src={project.mainImage}
                    alt={project.title}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                  <div className="work-item__price-badge">
                    <p className="work-item__price-badge-text">от {project.price}</p>
                  </div>
                  <div className="work-item__overlay">
                    <span className="work-item__overlay-text">Подробнее о проекте</span>
                  </div>
                </div>
                <div className="work-item__content">
                  <h3 className="work-item__title">{project.title}</h3>
                  <p className="work-item__description">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedProject && (
        <div className="modal-overlay" onClick={closeProject}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeProject}>&times;</button>
            <div className="modal-header">
              <h3 className="modal-title">{selectedProject.title}</h3>
              <p className="modal-price">{selectedProject.price}</p>
            </div>
            <div className="modal-gallery">
              {selectedProject.gallery.map((image, index) => (
                <div key={index} className="gallery-image">
                  <Image
                    src={image.src}
                    alt={image.description}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              ))}
            </div>
            <div className="modal-details">
              <div className="details-grid">
                {selectedProject.details.map((detail, index) => (
                  <div key={index} className="detail-item">
                    <span className="detail-name">{detail.name}:</span>
                    <span className="detail-value">{detail.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Works;