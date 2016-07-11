module.exports = function(grunt){

	//lancement de toutes les tâches sans avoir à les lister
    require('load-grunt-tasks')(grunt);

	//création des tâches
	grunt.initConfig({	//initialisation de l'ensemble des tâches
         sass: {
            dev: {
                    files: {
                        'style/style.css': 'style/app.scss'
                },
                    options: {
                    update: true,
                    sourcemap: 'auto',
                    style: 'expanded'

                }
            },
            autoprefixer: {
                file: {
                    src: 'style/style.css',
                    dest: 'style/style-prefix.css'
                }
            }
         },

    	watch: {
            options: {},
            sass : {
                files: ['style/**/*.scss'],
                tasks: ['sass:dev'],
                options: { }
            },
            grunt: {
                files: ['Gruntfile.js']
            }
        }

    });

    //lanceur de tâche
    grunt.registerTask(
        'default',
        ['watch']
    );

    //Inliner
    grunt.registerTask(
        'export',
        ['sass:dev']
    );
}
