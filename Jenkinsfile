pipeline {
    agent any

    environment {
        TAG_NAME = "build-v1.0.${BUILD_NUMBER}"
        GIT_REPO = "github.com/saurabh11122001/aws-test.git"
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
                withCredentials([string(credentialsId: 'github-token', variable: 'TOKEN')]) {
                    sh """
                        git config user.name "ci-bot"
                        git config user.email "ci-bot@example.com"
                        git tag $TAG_NAME
                        git push https://ci-bot:$TOKEN@$GIT_REPO $TAG_NAME
                    """
                }
            }
        }
    }

    post {
        success {
            echo "✅ Tag $TAG_NAME created and pushed to GitHub!"
        }
        failure {
            echo "❌ Failed to create or push tag"
        }
    }
}
