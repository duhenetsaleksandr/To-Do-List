export const html = `
    <header class="header">
        <div class="container header__container">
            <div class="header__logo">
                <img src="images/Logo.svg" alt="Logo">
            </div>
    
            <div class="header__theme">
                <svg class="header__theme__icon" width="23" height="25" viewBox="0 0 23 25" fill="#81A1FD" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.20016 0.433334C9.34983 0.618673 9.44153 0.845495 9.4634 1.08449C9.48527 1.32349 9.4363 1.56367 9.32283 1.77401C8.43633 3.43264 7.97337 5.29181 7.97654 7.18049C7.97654 13.4636 13.0029 18.5513 19.1977 18.5513C20.0057 18.5513 20.7924 18.4653 21.5483 18.3013C21.78 18.2501 22.0214 18.2697 22.2423 18.3575C22.4632 18.4453 22.6538 18.5975 22.7903 18.795C22.9344 19.0004 23.0079 19.2486 22.9993 19.501C22.9907 19.7533 22.9005 19.9957 22.7428 20.1904C21.5402 21.6958 20.023 22.9088 18.3019 23.7408C16.5809 24.5729 14.6993 25.0031 12.7944 25C5.72556 25 0 19.1966 0 12.0463C0 6.66484 3.24152 2.04903 7.85694 0.0926944C8.08684 -0.00632247 8.34207 -0.0266452 8.58428 0.0347789C8.82649 0.0962031 9.04261 0.236058 9.20016 0.433334Z"/>
                </svg>
            </div>
        </div>
    </header>
    
    <main class="main">
        <div class="container">
            <div class="main__container">
                <form action="#" class="add-task" id="add-task">
                    <input id="add-task-value" class="add-task__input basic-input" type="text" placeholder="Write a new task" autocomplete="off">
                    <div class="buttons">
                        <button type="submit" id="add-task-btn" class="add-task__btn basic-btn">
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="#FAFAFA" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M9 0C9.19891 0 9.38968 0.0790178 9.53033 0.21967C9.67098 0.360322 9.75 0.551088 9.75 0.75V8.25H17.25C17.4489 8.25 17.6397 8.32902 17.7803 8.46967C17.921 8.61032 18 8.80109 18 9C18 9.19891 17.921 9.38968 17.7803 9.53033C17.6397 9.67098 17.4489 9.75 17.25 9.75H9.75V17.25C9.75 17.4489 9.67098 17.6397 9.53033 17.7803C9.38968 17.921 9.19891 18 9 18C8.80109 18 8.61032 17.921 8.46967 17.7803C8.32902 17.6397 8.25 17.4489 8.25 17.25V9.75H0.75C0.551088 9.75 0.360322 9.67098 0.21967 9.53033C0.0790178 9.38968 0 9.19891 0 9C0 8.80109 0.0790178 8.61032 0.21967 8.46967C0.360322 8.32902 0.551088 8.25 0.75 8.25H8.25V0.75C8.25 0.551088 8.32902 0.360322 8.46967 0.21967C8.61032 0.0790178 8.80109 0 9 0Z"/>
                            </svg>
                            Add task
                        </button>
                        <button type="submit" id="edit-task-btn" class="edit-task__btn basic-btn hide-btn">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="#81A1FD" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19.8008 1.98669C19.9284 2.11596 20 2.29105 20 2.47358C20 2.65611 19.9284 2.83119 19.8008 2.96046L18.3767 4.40042L15.6459 1.64188L17.07 0.201916C17.1981 0.0726294 17.3717 0 17.5527 0C17.7337 0 17.9073 0.0726294 18.0354 0.201916L19.8008 1.98532V1.98669ZM17.4114 5.37419L14.6806 2.61564L5.37826 12.014C5.30312 12.0899 5.24654 12.1825 5.21305 12.2843L4.11392 15.6139C4.09399 15.6746 4.09116 15.7397 4.10575 15.8019C4.12034 15.8642 4.15177 15.9211 4.19654 15.9663C4.2413 16.0115 4.29764 16.0433 4.35924 16.058C4.42084 16.0728 4.48529 16.0699 4.54538 16.0498L7.84141 14.9394C7.94213 14.906 8.03375 14.8493 8.10903 14.7739L17.4114 5.37557V5.37419Z"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 17.9311C0 18.4798 0.215779 19.006 0.599867 19.394C0.983955 19.782 1.50489 20 2.04807 20H17.0673C17.6105 20 18.1314 19.782 18.5155 19.394C18.8996 19.006 19.1153 18.4798 19.1153 17.9311V9.65546C19.1153 9.47255 19.0434 9.29714 18.9154 9.16781C18.7874 9.03848 18.6137 8.96582 18.4327 8.96582C18.2516 8.96582 18.0779 9.03848 17.9499 9.16781C17.8219 9.29714 17.75 9.47255 17.75 9.65546V17.9311C17.75 18.114 17.678 18.2894 17.55 18.4187C17.422 18.5481 17.2483 18.6207 17.0673 18.6207H2.04807C1.86701 18.6207 1.69337 18.5481 1.56534 18.4187C1.43731 18.2894 1.36538 18.114 1.36538 17.9311V2.75909C1.36538 2.57619 1.43731 2.40078 1.56534 2.27145C1.69337 2.14212 1.86701 2.06946 2.04807 2.06946H10.9231C11.1041 2.06946 11.2778 1.9968 11.4058 1.86747C11.5338 1.73814 11.6057 1.56272 11.6057 1.37982C11.6057 1.19692 11.5338 1.02151 11.4058 0.892175C11.2778 0.762843 11.1041 0.690186 10.9231 0.690186H2.04807C1.50489 0.690186 0.983955 0.908159 0.599867 1.29615C0.215779 1.68415 0 2.21039 0 2.75909V17.9311Z"/>
                            </svg>
                            Edit task
                        </button>
                    </div>
                </form>
    
                <ul id="list-task" class="list-task"></ul>
            </div>
        </div>
    </main>
    
    <footer class="footer">
        <div class="container footer__container">
            <div class="footer__author">
                by Aleksandr Duhenets
            </div>
    
            <div class="footer__social">
                <div class="footer__social__telegram">
                    <a href="https://t.me/duhenets" target="_blank">
                        <svg class="footer__social__icon" width="25" height="25" viewBox="0 0 25 25" fill="#81A1FD" xmlns="http://www.w3.org/2000/svg">
                            <path d="M25 12.5C25 15.8152 23.683 18.9946 21.3388 21.3388C18.9946 23.683 15.8152 25 12.5 25C9.18479 25 6.00537 23.683 3.66117 21.3388C1.31696 18.9946 0 15.8152 0 12.5C0 9.18479 1.31696 6.00537 3.66117 3.66117C6.00537 1.31696 9.18479 0 12.5 0C15.8152 0 18.9946 1.31696 21.3388 3.66117C23.683 6.00537 25 9.18479 25 12.5ZM12.9484 9.22813C11.7328 9.73438 9.30156 10.7812 5.65781 12.3687C5.06719 12.6031 4.75625 12.8344 4.72813 13.0594C4.68125 13.4391 5.15781 13.5891 5.80625 13.7937L6.07969 13.8797C6.71719 14.0875 7.57656 14.3297 8.02187 14.3391C8.42812 14.3484 8.87969 14.1828 9.37813 13.8391C12.7828 11.5406 14.5406 10.3797 14.65 10.3547C14.7281 10.3359 14.8375 10.3141 14.9094 10.3797C14.9828 10.4438 14.975 10.5672 14.9672 10.6C14.9203 10.8016 13.05 12.5391 12.0828 13.4391C11.7812 13.7203 11.5672 13.9188 11.5234 13.9641C11.4271 14.0625 11.3292 14.1594 11.2297 14.2547C10.6359 14.8266 10.1922 15.2547 11.2531 15.9547C11.7641 16.2922 12.1734 16.5687 12.5813 16.8469C13.025 17.15 13.4688 17.4516 14.0437 17.8297C14.1891 17.9234 14.3297 18.025 14.4656 18.1219C14.9828 18.4906 15.45 18.8219 16.0234 18.7687C16.3578 18.7375 16.7031 18.425 16.8781 17.4875C17.2922 15.2734 18.1063 10.4781 18.2938 8.50156C18.3052 8.33725 18.2984 8.17218 18.2734 8.00937C18.2587 7.878 18.1951 7.75697 18.0953 7.67031C17.9531 7.57217 17.7837 7.52133 17.6109 7.525C17.1422 7.53281 16.4187 7.78438 12.9484 9.22813Z"/>
                        </svg>
                    </a>
                </div>
    
                <div class="footer__social__instagram">
                    <a href="https://www.instagram.com/duhenets_aleksandr/" target="_blank">
                        <svg class="footer__social__icon" width="25" height="25" viewBox="0 0 25 25" fill="#81A1FD" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.5 0C9.10781 0 8.68125 0.015625 7.34844 0.075C6.01562 0.1375 5.10781 0.346875 4.3125 0.65625C3.47827 0.97003 2.72264 1.46223 2.09844 2.09844C1.46262 2.72296 0.97048 3.4785 0.65625 4.3125C0.346875 5.10625 0.135937 6.01562 0.075 7.34375C0.015625 8.67969 0 9.10469 0 12.5016C0 15.8953 0.015625 16.3203 0.075 17.6531C0.1375 18.9844 0.346875 19.8922 0.65625 20.6875C0.976562 21.5094 1.40313 22.2062 2.09844 22.9016C2.79219 23.5969 3.48906 24.025 4.31094 24.3438C5.10781 24.6531 6.01406 24.8641 7.34531 24.925C8.67969 24.9844 9.10469 25 12.5 25C15.8953 25 16.3188 24.9844 17.6531 24.925C18.9828 24.8625 19.8938 24.6531 20.6891 24.3438C21.5228 24.0298 22.2778 23.5376 22.9016 22.9016C23.5969 22.2062 24.0234 21.5094 24.3438 20.6875C24.6516 19.8922 24.8625 18.9844 24.925 17.6531C24.9844 16.3203 25 15.8953 25 12.5C25 9.10469 24.9844 8.67969 24.925 7.34531C24.8625 6.01563 24.6516 5.10625 24.3438 4.3125C24.0296 3.47848 23.5374 2.72293 22.9016 2.09844C22.2775 1.46199 21.5219 0.969758 20.6875 0.65625C19.8906 0.346875 18.9813 0.135937 17.6516 0.075C16.3172 0.015625 15.8938 0 12.4969 0H12.5016H12.5ZM11.3797 2.25312H12.5016C15.8391 2.25312 16.2344 2.26406 17.5516 2.325C18.7703 2.37969 19.4328 2.58437 19.8734 2.75469C20.4562 2.98125 20.8734 3.25312 21.3109 3.69062C21.7484 4.12813 22.0188 4.54375 22.2453 5.12813C22.4172 5.56719 22.6203 6.22969 22.675 7.44844C22.7359 8.76562 22.7484 9.16094 22.7484 12.4969C22.7484 15.8328 22.7359 16.2297 22.675 17.5469C22.6203 18.7656 22.4156 19.4266 22.2453 19.8672C22.0449 20.4099 21.725 20.9007 21.3094 21.3031C20.8719 21.7406 20.4563 22.0109 19.8719 22.2375C19.4344 22.4094 18.7719 22.6125 17.5516 22.6688C16.2344 22.7281 15.8391 22.7422 12.5016 22.7422C9.16406 22.7422 8.76719 22.7281 7.45 22.6688C6.23125 22.6125 5.57031 22.4094 5.12969 22.2375C4.58672 22.0374 4.09551 21.7181 3.69219 21.3031C3.27617 20.9001 2.95582 20.4088 2.75469 19.8656C2.58437 19.4266 2.37969 18.7641 2.325 17.5453C2.26562 16.2281 2.25312 15.8328 2.25312 12.4937C2.25312 9.15625 2.26562 8.7625 2.325 7.44531C2.38125 6.22656 2.58438 5.56406 2.75625 5.12344C2.98281 4.54063 3.25469 4.12344 3.69219 3.68594C4.12969 3.24844 4.54531 2.97813 5.12969 2.75156C5.57031 2.57969 6.23125 2.37656 7.45 2.32031C8.60313 2.26719 9.05 2.25156 11.3797 2.25V2.25312ZM19.1734 4.32812C18.9765 4.32812 18.7814 4.36692 18.5994 4.44231C18.4174 4.51769 18.2521 4.62818 18.1128 4.76746C17.9735 4.90675 17.863 5.07211 17.7876 5.2541C17.7122 5.43609 17.6734 5.63114 17.6734 5.82812C17.6734 6.02511 17.7122 6.22016 17.7876 6.40215C17.863 6.58414 17.9735 6.7495 18.1128 6.88879C18.2521 7.02807 18.4174 7.13856 18.5994 7.21394C18.7814 7.28933 18.9765 7.32812 19.1734 7.32812C19.5713 7.32812 19.9528 7.17009 20.2341 6.88879C20.5154 6.60748 20.6734 6.22595 20.6734 5.82812C20.6734 5.4303 20.5154 5.04877 20.2341 4.76746C19.9528 4.48616 19.5713 4.32812 19.1734 4.32812ZM12.5016 6.08125C11.6501 6.06797 10.8045 6.2242 10.014 6.54085C9.22353 6.85749 8.50393 7.32824 7.89711 7.92566C7.29029 8.52309 6.80838 9.23526 6.47944 10.0207C6.1505 10.8062 5.98109 11.6492 5.98109 12.5008C5.98109 13.3523 6.1505 14.1954 6.47944 14.9808C6.80838 15.7663 7.29029 16.4785 7.89711 17.0759C8.50393 17.6733 9.22353 18.1441 10.014 18.4607C10.8045 18.7774 11.6501 18.9336 12.5016 18.9203C14.1868 18.894 15.7941 18.2061 16.9765 17.0051C18.159 15.804 18.8217 14.1862 18.8217 12.5008C18.8217 10.8154 18.159 9.19752 16.9765 7.99648C15.7941 6.79545 14.1868 6.10754 12.5016 6.08125ZM12.5016 8.33281C13.6068 8.33281 14.6667 8.77185 15.4482 9.55335C16.2297 10.3349 16.6688 11.3948 16.6688 12.5C16.6688 13.6052 16.2297 14.6651 15.4482 15.4466C14.6667 16.2281 13.6068 16.6672 12.5016 16.6672C11.3964 16.6672 10.3364 16.2281 9.55492 15.4466C8.77342 14.6651 8.33438 13.6052 8.33438 12.5C8.33438 11.3948 8.77342 10.3349 9.55492 9.55335C10.3364 8.77185 11.3964 8.33281 12.5016 8.33281Z"/>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    </footer>
    
    <script type="text/template" id="templateTodo">
        <li class="list-task__item" data-id="{{todo-id}}">
            <div class="list-task__item__check">{{todo-title}}</div>
            <div class="list-task__item__edit"></div>
            <div class="list-task__item__delete"></div>
        </li>
    </script>
`;