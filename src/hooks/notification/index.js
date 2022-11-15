import './style.scss'

export function useNotification() {
    function gen4() {
        return Math.random().toString(16).slice(-4)
    }

    function simpleUniqueId(prefix) {
        return (prefix || '').concat([
            gen4(),
            gen4(),
        ].join(''))
    }

    function getClassName(type){
        switch (type){
            case "success":
                return "alert-item alert-item--success";
            case "info":
                return "alert-item alert-item--info";
            case "warning":
                return "alert-item alert-item--warning";
            case "danger":
                return "alert-item alert-item--danger";
            default:
                return "alert-item alert-item--info"
        }
    }

    function getDefaultTitle(type){
        switch (type){
            case "success":
                return "Успешно";
            case "info":
                return "Информация";
            case "warning":
                return "Предупреждение";
            case "danger":
                return "Ошикба";
            default:
                return "Information"
        }
    }

    function getDefaultText(type){
        switch (type){
            case "success":
                return "Успешно";
            case "info":
                return "Успешно";
            case "warning":
                return "Что-то пошла не так";
            case "danger":
                return "Что-то пошла не так";
            default:
                return "Information"
        }
    }

    const zone = document.getElementById("custom-alert-zone");

    const notification = (text, props) => {
        //values
        let {type="info",delay,title} = props;

        let defaultText = getDefaultText(type);
        let defaultTitle = getDefaultTitle(type);

        let uniqId = simpleUniqueId('devent-alert-');

        var alertItem = document.createElement("div");
        alertItem.id = uniqId;
        alertItem.className = getClassName(type);

        alertItem.innerHTML = `<div class="alert-item__close-btn"></div><div class="alert-item__title">${title ? title : defaultTitle}</div><div class="alert-item__text">${text ? text : defaultText}</div>`;

        zone.appendChild(alertItem);

        let currElem = document.getElementById(uniqId);

        const addShowClass = () => {
            currElem.classList.add("--show");
        }

        const removeElement = () => {
            currElem.classList.remove("--show");

            setTimeout(() => {
                currElem.remove();
            }, 500)
        }

        setTimeout(() => {
            addShowClass()
        }, 100)

        setTimeout(() => {
            removeElement()

        }, delay ? delay : 3000);

        currElem.querySelector('.alert-item__close-btn').onclick = function() {
            removeElement()
        }
    }

    return { notification };
}
