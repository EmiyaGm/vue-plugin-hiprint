export default {
  panels: [
    {
      index: 0,
      name: 1,
      height: 60,
      width: 80,
      paperHeader: 0,
      paperFooter: 170.07874015748033,
      printElements: [
        {
          options: {
            left: 15,
            top: 13.5,
            height: 15,
            width: 196.5,
            title: '作者',
            right: 134.25,
            bottom: 27.75,
            vCenter: 74.25,
            hCenter: 20.25,
            coordinateSync: false,
            widthHeightSync: false,
            fontSize: 13.5,
            fontWeight: '500',
            color: '#000000',
            qrCodeLevel: 0,
          },
          printElementType: { title: '文本', type: 'text' },
        },
        {
          options: {
            left: 15,
            top: 33,
            height: 16.5,
            width: 196.5,
            title: '商品',
            coordinateSync: false,
            widthHeightSync: false,
            fontSize: 15.75,
            fontWeight: '300',
            color: '#000000',
            qrCodeLevel: 0,
            right: 211.5,
            bottom: 48.75,
            vCenter: 113.25,
            hCenter: 40.5,
          },
          printElementType: { title: '文本', type: 'text' },
        },
        {
          options: {
            left: 15,
            top: 73.5,
            height: 9.75,
            width: 120,
            title: '尺寸',
            coordinateSync: false,
            widthHeightSync: false,
            fontSize: 11.25,
            fontWeight: '300',
            color: '#000000',
            qrCodeLevel: 0,
            right: 135,
            bottom: 82.5,
            vCenter: 75,
            hCenter: 77.625,
          },
          printElementType: { title: '文本', type: 'text' },
        },
        {
          options: {
            left: 15,
            top: 88.5,
            height: 9.75,
            width: 120,
            title: '材质',
            coordinateSync: false,
            widthHeightSync: false,
            fontSize: 11.25,
            fontWeight: '300',
            color: '#000000',
            qrCodeLevel: 0,
            right: 135,
            bottom: 97.5,
            vCenter: 75,
            hCenter: 92.625,
          },
          printElementType: { title: '文本', type: 'text' },
        },
        {
          options: {
            left: 157.5,
            top: 99,
            height: 60,
            width: 60,
            right: 216.75,
            bottom: 159,
            vCenter: 186.75,
            hCenter: 129,
            fit: '',
            coordinateSync: false,
            widthHeightSync: false,
            src: require('../../assets/wxcode.png')
          },
          printElementType: { title: '微信二维码', type: 'image' },
        },
        {
          options: {
            left: 15,
            top: 103.5,
            height: 9.75,
            width: 120,
            title: '时间',
            coordinateSync: false,
            widthHeightSync: false,
            fontSize: 11.25,
            fontWeight: '300',
            color: '#000000',
            qrCodeLevel: 0,
            right: 134.25,
            bottom: 111.75,
            vCenter: 74.25,
            hCenter: 106.875,
          },
          printElementType: { title: '文本', type: 'text' },
        },
      ],
      paperNumberDisabled: true,
      paperNumberContinue: true,
      watermarkOptions: {
        content: '',
        rotate: 25,
        timestamp: true,
        format: 'YYYY-MM-DD HH:mm',
      },
      panelLayoutOptions: {},
    },
  ],
}
