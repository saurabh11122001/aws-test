pipeline {
  agent any

  environment {
    TAG_NAME = "build-v1.0.${BUILD_NUMBER}"
  }

  stages {
    stage('Checkout') {
      steps {
        git branch: 'main', url: 'https://github.com/your-username/your-repo.git'
      }
    }

    stage('Create Tag') {
      steps {
        sh "git config user.name 'ci-bot'"
        sh "git config user.email 'ci-bot@example.com'"
        sh "git tag ${TAG_NAME}"
        sh "git push origin ${TAG_NAME}"
      }
    }
  }

  post {
    success {
      echo "Tag ${TAG_NAME} created and pushed!"
    }
  }
}
