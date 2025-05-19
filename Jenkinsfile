pipeline {
    agent any

    stages {
        stage('Build Docker Image') {
            steps {
                sh 'docker build -t travel-app .'
            }
        }
        
        stage('Run Container') {
            steps {
                sh 'docker stop travel-app || true'
                sh 'docker rm travel-app || true'
                sh 'docker run -d --name travel-app -p 3000:3000 travel-app'
            }
        }
        
        stage('Test Endpoint') {
            steps {
                sh 'curl http://localhost:3000/travel'
            }
        }
    }
}
