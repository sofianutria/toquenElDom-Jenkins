pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                script {
                    // Build Docker image without cache
                    sh 'docker build --no-cache -t toquen-el-dom -f Dockerfile .'
                }
            }
        }

        stage('Remove Existing Container') {
            steps {
                script {
                    // Remove old container if it exists
                    sh 'docker rm -f toquen-el-dom || true'
                }
            }
        }

        stage('Execute Command2') {
            steps {
                script {
                    // Run the container in detached mode
                    sh 'docker run -d -p 8081:80 --name toquen-el-dom toquen-el-dom'
                }
            }
        }
    }
}

