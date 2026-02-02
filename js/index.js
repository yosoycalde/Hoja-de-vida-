        // Animación de barras de progreso
        document.addEventListener('DOMContentLoaded', function() {
            const skillBars = document.querySelectorAll('.skill-progress');
            
            const animateSkills = () => {
                skillBars.forEach(bar => {
                    const progress = bar.getAttribute('data-progress');
                    setTimeout(() => {
                        bar.style.width = progress + '%';
                    }, 100);
                });
            };

            // Observador de intersección para animar cuando sea visible
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        animateSkills();
                        observer.unobserve(entry.target);
                    }
                });
            });

            const skillsSection = document.querySelector('.skills-grid');
            if (skillsSection) {
                observer.observe(skillsSection);
            }

            // Efecto de clic en la imagen de perfil
            const profileImg = document.getElementById('profileImg');
            profileImg.addEventListener('click', function() {
                this.style.transform = 'rotate(360deg) scale(1.1)';
                setTimeout(() => {
                    this.style.transform = 'rotate(0deg) scale(1)';
                }, 600);
            });

            // Efecto de hover en secciones
            const sections = document.querySelectorAll('.section');
            sections.forEach(section => {
                section.addEventListener('mouseenter', function() {
                    this.style.transform = 'scale(1.01)';
                });
                section.addEventListener('mouseleave', function() {
                    this.style.transform = 'scale(1)';
                });
            });
        });

        // Función para editar contenido (opcional)
        function makeEditable() {
            const editableElements = [
                'nombre', 'profesion', 'email', 'telefono', 'ubicacion', 'linkedin'
            ];
            
            editableElements.forEach(id => {
                const element = document.getElementById(id);
                if (element) {
                    element.contentEditable = true;
                    element.style.cursor = 'text';
                    element.addEventListener('focus', function() {
                        this.style.background = '#fff9c4';
                    });
                    element.addEventListener('blur', function() {
                        this.style.background = 'transparent';
                    });
                }
            });
        }
