pipeline {
    agent any

    environment {
        TAG_NAME = "build-v1.0.${BUILD_NUMBER}"
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/saurabh11122001/aws-test.git',
                    credentialsId: 'github-creds'
            }
        }

        stage('Create Tag & Push') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'github-creds', usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD')]) {
                    sh '''
                        git config user.name "ci-bot"
                        git config user.email "ci-bot@example.com"
                        git tag $TAG_NAME
                        git push https://$USERNAME:$PASSWORD@github.com/saurabh11122001/aws-test.git $TAG_NAME
                    '''
                }
            }
        }
    }

    post {
        success {
            echo "✅ Tag $TAG_NAME created and pushed to GitHub!"
        }
    }
}
