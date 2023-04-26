const RenderPosition = {
  BEFOREBEGIN: 'beforebegin', // перед самим элементом targetElement.
  AFTERBEGIN: 'afterbegin', // внутри элемента targetElement, перед его первым потомком.
  BEFOREEND: 'beforeend', // внутри элемента targetElement, после его последнего потомка.
  AFTEREND: 'afterend', // после самого элемента targetElement.
};

function createElement(template) {
  const newElement = document.createElement('div');
  newElement.innerHTML = template;

  return newElement.firstElementChild;
}

function render(component, container, place = RenderPosition.BEFOREEND) {
  container.insertAdjacentElement(place, component.getElement()); // добавляет переданный элемент в DOM-дерево относительно элемента, вызвавшего метод.
}

export {RenderPosition, createElement, render};
