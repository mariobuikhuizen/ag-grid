module.exports = {
    configureWebpack: {
        output: {
            library: "agGridVue"
        },
        externals: {
            'ag-grid-community': 'agGrid',
            /* Uncomment the lines below to enable AMD support in the UMD module */
            // vue: {
            //     commonjs: 'vue',
            //     commonjs2: 'vue',
            //     root: 'Vue',
            //     amd: 'vue'
            // }
        }
    }
}
