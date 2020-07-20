module.exports = {
  'cover-image': {
    'src': '图标路径，支持临时路径、网络地址（1.6.0起支持）、云文件ID（2.2.3起支持）',
    'bindload': '图片加载成功时触发',
    'binderror': '图片加载失败时触发'
  },
  'cover-view': {
    'scroll-top': '设置顶部滚动偏移量，仅在设置了 overflow-y: scroll 成为滚动元素后生效',
  },
  'match-media': {
    'min-width': '页面最小宽度（ px 为单位）',
    'max-width': '页面最大宽度（ px 为单位）',
    'width': '页面宽度（ px 为单位）',
    'min-height': '页面最小高度（ px 为单位）',
    'max-height': '页面最大高度（ px 为单位）',
    'height': '页面高度（ px 为单位）',
    'orientation': '屏幕方向（ landscape 或 portrait ）'
  },
  'movable-area': {
    'scale-area': '当里面的movable-view设置为支持双指缩放时，设置此值可将缩放手势生效区域修改为整个movable-area'
  },
  'movable-view': {
    'direction': 'movable-view的移动方向，属性值有all、vertical、horizontal、none',
    'inertia': 'movable-view是否带有惯性',
    'out-of-bounds': '超过可移动区域后，movable-view是否还可以移动',
    'x': '定义x轴方向的偏移，如果x的值不在可移动范围内，会自动移动到可移动范围；改变x的值会触发动画',
    'y': '定义y轴方向的偏移，如果y的值不在可移动范围内，会自动移动到可移动范围；改变y的值会触发动画',
    'damping': '阻尼系数，用于控制x或y改变时的动画和过界回弹的动画，值越大移动越快',
    'friction': '摩擦系数，用于控制惯性滑动的动画，值越大摩擦力越大，滑动越快停止；必须大于0，否则会被设置成默认值',
    'disabled': '是否禁用',
    'scale': '是否支持双指缩放，默认缩放手势生效区域是在movable-view内',
    'scale-min': '定义缩放倍数最小值',
    'scale-max': '定义缩放倍数最大值',
    'scale-value': '定义缩放倍数，取值范围为 0.5 - 10',
    'animation': '是否使用动画',
    'bindchange': '拖动过程中触发的事件，event.detail = {x, y, source}',
    'bindscale': '缩放过程中触发的事件，event.detail = {x, y, scale}，x和y字段在2.1.0之后支持',
    'htouchmove': '初次手指触摸后移动为横向的移动时触发，如果catch此事件，则意味着touchmove事件也被catch',
    'vtouchmove': '初次手指触摸后移动为纵向的移动时触发，如果catch此事件，则意味着touchmove事件也被catch'
  }
}