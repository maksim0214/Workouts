# 1 Initial Project
    npx create-expo-app@latest Workouts -t blank<br>
    cd Workouts<br>
    npm start<br>


# 2 install Expo Router
https://docs.expo.dev/router/installation/#install-dependencies

    npx expo install expo-router react-native-safe-area-context react-native-screens expo-linking expo-constants expo-status-bar react-native-gesture-handler

然后跟着执行后面的<br>
2 Install dependencies<br>
3 Setup entry point (package.json)<br>
4 Modify project configuration (app.json)<br>
5 Modify babel.config.js<br>
6 Clear bundler cache<br>
7 Update resolutions<br>



# 3 install stepZen
    npm install -g stepZen

# 3.1 Create an stepZen account
    stepZen login
input name & admin key

# 3.2 Create an api-ninjas account & get a api key
https://api-ninjas.com/
key: HWwvWNkvh9SlRZ7pOvhuOQ==JJ9QiZvqm2XogQj5

# 3.3 test mock data by stepZen
use curl or postman or other request tool<br>

    curl https://api.api-ninjas.com/v1/exercises?muscle=biceps -H "X-Api-Key:HWwvWNkvh9SlRZ7pOvhuOQ==JJ9QiZvqm2XogQj5"

# 3.4 Use the StepZen CLI to create a GraphQL schema
    mkdir api && cd api
    stepzen import curl https://api.api-ninjas.com/v1/exercises?muscle=biceps -H "X-Api-Key:HWwvWNkvh9SlRZ7pOvhuOQ==JJ9QiZvqm2XogQj5"
and there are new GraphQL schema & config file

# 3.5 run stepzen
    stepzen start


# 4 状态管理 install tanstack/react-query
    npm i @tanstack/react-query
    npm i -D @tanstack/eslint-plugin-query

# 5 Graphql轻量级客户端库 install graphql-request & graphql
    install graphql-request  graphql




Bug Fixed
# 1 expo 和 metro 对 mjs文件的支持
    "Metro has encountered an error: While trying to resolve module `graphql` from file 
     the package `C:\\Users\\Lee\\工作目录\\MyCode\\2024.4.5_ReactNativeDemo\\Workouts\\node_modules\\graphql\\package.json` was successfully found. However, this package itself specifies a `main` module field that could not be resolved 
    `C:\\Users\\Lee\\工作目录\\MyCode\\2024.4.5_ReactNativeDemo\\Workouts\\node_modules\\graphql\\index.mjs`. 
     Indeed, none of these files exist:

在根目录创建metro配置文件
npx expo customize metro.config.js
如何加入
config.resolver.sourceExts.push('cjs');
config.resolver.sourceExts.push('mjs');
config.resolver.assetExts.push('cjs');
config.resolver.assetExts.push('mjs');