pipeline {
    agent any

    environment {
        IMAGE_NAME = 'travel-app'
        CONTAINER_NAME = 'travel-app-container'
        PORT = '3000'
    }

    stages {
        stage('Build Docker image') {
            steps {
                sh "docker build -t ${IMAGE_NAME} ."
            }
        }

        stage('Run container') {
            steps {
                sh "docker rm -f ${CONTAINER_NAME} || true"
                sh "docker run -d --name ${CONTAINER_NAME} -p ${PORT}:${PORT} ${IMAGE_NAME}"
            }
        }

        stage('Test /travel endpoint') {
            steps {
                sleep 5 // Подождать, пока контейнер запустится
                sh "curl --fail http://localhost:${PORT}/travel"
            }
        }
    }

    post {
        always {
            sh "docker -f ${CONTAINER_NAME} || true"
        }
    }
}
