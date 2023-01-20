export default [
    {
        path: '/',
        name: 'main',
        component: () => import('@/views/main/main.vue'),
        meta: {
            title: '测试',
            keepAlive: true, // 需要被缓存
        }
    },
    {
        path: '/weekly_forecast_details',
        name: 'weekly_forecast_details',
        component: () => import('@/views/weekly_forecast_details/weekly_forecast_details.vue'),
        meta: {
            title: '行业个股收益率预测详情',
            keepAlive: true, // 需要被缓存
        }
    },
    {
        path: '/weekly_forecast',
        name: 'weekly_forecast',
        component: () => import('@/views/weekly_forecast/weekly_forecast.vue'),
        meta: {
            title: '行业个股收益率预测',
            keepAlive: true, // 需要被缓存
        }
    }
]
