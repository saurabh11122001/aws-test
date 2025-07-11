pipeline {
    agent any

    parameters {
        choice(name: 'REPO_NAME', choices: ['A', 'B', 'C'], description: 'Select the repository')
    }

    environment {
        TAG_NAME = "build-v1.0.${BUILD_NUMBER}"
        GITHUB_USER = "saurabh11122001" // Replace with your GitHub username
        GIT_REPO = "github.com/${GITHUB_USER}/${params.REPO_NAME}.git"
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main',
                    url: "https://github.com/${GITHUB_USER}/${params.REPO_NAME}.git",
                    credentialsId: 'github-creds'
            }
        }

        stage('Create Tag & Push') {
            steps {
                withCredentials([string(credentialsId: 'github-token', variable: 'TOKEN')]) {
                    sh """
                        git config user.name "ci-bot"
                        git config user.email "ci-bot@example.com"
                        git tag ${TAG_NAME}
                        git push https://ci-bot:${TOKEN}@${GIT_REPO} ${TAG_NAME}
                    """
                }
            }
        }
    }

    post {
        success {
            echo "✅ Tag ${TAG_NAME} created and pushed to ${params.REPO_NAME}!"
        }
        failure {
            echo "❌ Failed to create or push tag to ${params.REPO_NAME}"
        }
    }
}
