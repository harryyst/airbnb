const path = require('path')
const resolve = (pathname)=>path.resolve(__dirname,pathname)
const CracoLessPlugin = require('craco-less');

module.exports={
    plugins: [
        {
          plugin: CracoLessPlugin,
          options: {
            lessLoaderOptions: {
              lessOptions: {
                modifyVars: { '@primary-color': '#1DA57A' },
                javascriptEnabled: true,
              },
            },
          },
        },
      ],
    webpack:{
        alias:{
            "@":resolve('src'),
            // '@mui/styled-engine': '@mui/styled-engine-sc',
            'components':resolve('src/components'),
            'utils':resolve('src/utils')
        }
    }
}