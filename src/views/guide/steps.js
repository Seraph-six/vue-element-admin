const steps = [
  {
    element: '#hamburger-container',
    popover: {
      title: '菜单栏',
      description: '点击打开或者关闭 sidebar',
      position: 'bottom'
    }
  },
  {
    element: '#breadcrumb-container',
    popover: {
      title: '标签页切换',
      description: '指示当前页的位置 也可点击切换',
      position: 'bottom'
    }
  },
  {
    element: '#header-search',
    popover: {
      title: '页面搜索，可以输入菜单页面名字快速找到',
      description: 'Page search, quick navigation',
      position: 'left'
    }
  },
  {
    element: '#screenfull',
    popover: {
      title: '是否全屏',
      description: '设置是否全屏，点击切换',
      position: 'left'
    }
  },
  {
    element: '#size-select',
    popover: {
      title: 'Switch Size',
      description: 'Switch the system size',
      position: 'left'
    }
  },
  {
    element: '#tags-view-container',
    popover: {
      title: 'Tags view',
      description: 'The history of the page you visited',
      position: 'bottom'
    },
    padding: 0
  }
]

export default steps
