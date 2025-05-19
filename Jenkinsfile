pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/romanSan17/jenkinsDocker.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    docker.build('travel-app')
                }
            }
        }

        stage('Run Container') {
            steps {
                script {
                    docker.image('travel-app').run('-p 3000:3000 --name travel-app-test')
                }
            }
        }

        stage('Test /travel endpoint') {
            steps {
                sh 'sleep 5'
                sh 'curl http://localhost:3000/travel'
            }
        }
    }

    post {
        always {
            sh 'docker -f travel-app-test || true'
        }
    }
}
