export function Postgres({
    className,
    fill
}: {
    className?: string;
    fill?: string;
}){
    return (
        <>
            <svg className={className} width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M24.7692 39.148C25.4692 39.727 26.2899 39.9738 27.1758 40.0195C27.5422 40.0387 27.9192 40.0207 28.2797 39.9551C28.8516 39.8512 29.4219 39.7207 29.9782 39.5531C31.111 39.2113 32.0899 38.6207 32.8208 37.6668C33.2372 37.123 33.579 36.5352 33.7985 35.8852C33.9797 35.3488 34.1501 34.807 34.2856 34.2582C34.3926 33.8258 34.4458 33.3793 34.5106 32.9375C34.554 32.6453 34.5801 32.35 34.6071 32.0551C34.6508 31.5766 34.6965 31.0988 34.7282 30.6191C34.7504 30.2855 34.7497 29.9504 34.7625 29.6164C34.7668 29.5145 34.7833 29.4133 34.793 29.3121C34.8012 29.218 34.8489 29.1855 34.945 29.1871C35.2825 29.1922 35.6208 29.2008 35.9579 29.1855C36.3356 29.1687 36.7161 29.1523 37.0879 29.0902C37.6171 29.0016 38.1421 28.8895 38.6614 28.7543C39.2739 28.5938 39.836 28.3066 40.3774 27.9801C41.0071 27.5992 41.5821 27.1527 42.0473 26.5773C42.4532 26.0766 42.6454 25.4961 42.5473 24.8629C42.4051 23.943 41.6321 23.3402 40.7333 23.2992C40.4075 23.2844 40.077 23.3187 39.7528 23.3598C39.3602 23.4098 38.9735 23.498 38.5821 23.5563C38.3118 23.5969 38.0379 23.6148 37.7684 23.643L37.761 23.6078C38.2649 22.6559 38.7899 21.7148 39.2665 20.75C39.6325 20.0094 39.945 19.2426 40.268 18.4809C40.8032 17.2199 41.2301 15.9203 41.584 14.5988C41.9227 13.334 42.2126 12.0555 42.3043 10.743C42.3411 10.2191 42.3665 9.69297 42.3629 9.16836C42.3606 8.74961 42.3153 8.33047 42.2735 7.91328C42.2258 7.43516 42.0813 6.98203 41.8813 6.54609C41.618 5.97109 41.209 5.49961 40.779 5.05195C40.4348 4.69336 40.0559 4.3668 39.6805 4.04023C39.145 3.57461 38.5426 3.20234 37.9176 2.87227C37.2092 2.49596 36.4586 2.20487 35.6817 2.00508C35.2083 1.88571 34.7318 1.77877 34.2528 1.68437C34.0825 1.65 33.9106 1.5625 33.7391 1.5625H30.5094C30.3926 1.5625 30.277 1.63906 30.1594 1.65195C29.3865 1.73632 28.6233 1.89393 27.8801 2.12266C27.6028 2.2082 27.3497 2.1582 27.086 2.13359C26.8836 2.11484 26.6848 2.06289 26.4825 2.05273C25.7126 2.01445 24.9418 1.95898 24.1715 1.96719C23.434 1.975 22.704 2.09688 21.9903 2.29922C21.393 2.46953 20.8083 2.67617 20.2723 2.99063C20.0434 3.125 19.8614 3.09961 19.6243 3.03164C18.828 2.79836 18.0247 2.58941 17.2157 2.40508C16.7114 2.29219 16.1922 2.23516 15.677 2.18203C15.1825 2.13067 14.6861 2.09979 14.1891 2.08945C13.704 2.07891 13.2157 2.0793 12.7325 2.12227C11.9633 2.19063 11.209 2.34687 10.4754 2.59922C9.66679 2.87569 8.91118 3.28797 8.24107 3.81836C7.55748 4.35937 7.00904 5.01914 6.5688 5.77344C6.10435 6.56914 5.78521 7.42109 5.58755 8.31523C5.48013 8.8 5.51958 9.29844 5.44576 9.79062C5.4231 9.94297 5.4688 10.0961 5.4688 10.2492V12.3918C5.4688 12.534 5.42701 12.6766 5.44498 12.8195C5.48912 13.1629 5.47388 13.509 5.53208 13.85C5.62349 14.3898 5.70591 14.9277 5.81685 15.4637C5.97193 16.2125 6.11998 16.9605 6.29185 17.7059C6.41685 18.2484 6.5524 18.7879 6.70123 19.3242C6.92779 20.1438 7.14888 20.9645 7.40552 21.7742C7.64419 22.527 7.91607 23.2687 8.18755 24.0109C8.55955 25.0372 9.01552 26.0311 9.55083 26.9824C10.0176 27.807 10.5501 28.5793 11.2649 29.2141C11.7364 29.6328 12.2602 29.9543 12.87 30.1152C13.3463 30.2417 13.8455 30.2556 14.3282 30.1559C14.8876 30.0422 15.4103 29.7919 15.8497 29.4273C15.9012 29.3855 15.9571 29.3531 16.0184 29.4305C16.2504 29.7242 16.5606 29.9203 16.8852 30.0895C17.761 30.5465 18.7153 30.6836 19.6844 30.7391C19.9196 30.7523 20.1563 30.7188 20.3926 30.7125C20.854 30.6996 21.3016 30.6098 21.7418 30.4824C21.9731 30.4156 22.1985 30.3305 22.4336 30.2516C22.4458 30.502 22.4614 30.7426 22.4692 30.9836L22.5016 32.2973C22.5079 32.4973 22.5157 32.6973 22.534 32.8965C22.5817 33.4098 22.6282 33.923 22.6895 34.4348C22.7317 34.7875 22.7762 35.1426 22.859 35.4871C23.0255 36.1814 23.2532 36.8596 23.5395 37.5137C23.8136 38.1485 24.2351 38.7088 24.7692 39.148V39.148ZM23.3665 32.598C23.3387 31.9812 23.318 31.3641 23.3043 30.7469C23.2879 29.9883 23.2825 29.2293 23.2719 28.4707L23.27 28.4418C22.8844 28.6734 22.5043 28.9266 22.1024 29.1355C21.6309 29.3805 21.1192 29.5223 20.5891 29.5625C20.1739 29.5938 19.7524 29.6223 19.3391 29.5895C18.661 29.5344 17.9829 29.4285 17.3758 29.0941C17.1297 28.9586 16.8727 28.7934 16.7028 28.5773C16.2961 28.0582 16.4911 27.4023 17.1043 27.0867C17.5282 26.868 17.9907 26.777 18.4501 26.6707C18.8499 26.58 19.2456 26.4719 19.636 26.3465C20.0211 26.2203 20.2641 25.9078 20.5044 25.6012L20.8848 25.1121L20.4274 25.0645C19.9735 25.0223 19.5403 24.8969 19.1262 24.7133C18.7723 24.5566 18.7668 24.5395 18.5067 24.8215C18.0731 25.2922 17.6512 25.7746 17.2258 26.2535C16.9129 26.6059 16.6024 26.9602 16.2903 27.3137C15.9825 27.6633 15.6934 28.0324 15.361 28.3574C14.868 28.8402 14.2735 29.1305 13.5641 29.0977C13.109 29.0766 12.6926 28.9172 12.3176 28.6566C11.5446 28.1184 11.0239 27.3645 10.5493 26.5734C9.94185 25.5594 9.47505 24.4793 9.07623 23.3699C8.80005 22.6027 8.52232 21.8352 8.28169 21.057C8.01958 20.2113 7.78951 19.3559 7.56333 18.4996C7.39224 17.8539 7.24068 17.2027 7.09615 16.5504C6.92976 15.8089 6.77583 15.0646 6.63443 14.318C6.54029 13.8137 6.48599 13.302 6.40982 12.7945C6.30708 12.1098 6.28833 11.4195 6.32583 10.7324C6.35904 10.1133 6.44771 9.49609 6.53599 8.88125C6.65826 8.03047 6.93873 7.22773 7.34185 6.46953C7.59052 6.0075 7.8953 5.57795 8.24927 5.19063C8.8313 4.54648 9.5356 4.08125 10.3192 3.73164C10.8665 3.4875 11.445 3.34102 12.0344 3.22578C12.9094 3.05547 13.7922 3.0625 14.6751 3.08047C15.061 3.08867 15.4458 3.15859 15.8313 3.19727C16.6618 3.27969 17.4754 3.45469 18.279 3.66992C18.8649 3.82695 19.4387 4.03086 20.0192 4.20742C20.077 4.225 20.1626 4.22344 20.2106 4.19258C20.9977 3.67852 21.8575 3.33945 22.7727 3.14531C23.12 3.07188 23.4786 3.03945 23.8336 3.0168C24.2649 2.98984 24.7004 2.96406 25.1309 2.98945C25.6485 3.01914 26.1645 3.09531 26.679 3.16563C26.929 3.2 27.1727 3.28633 27.4227 3.30977C27.543 3.32109 27.67 3.23398 27.7965 3.2043C28.4426 3.05469 29.086 2.88867 29.7379 2.77109C30.2231 2.68359 30.7192 2.64219 31.2122 2.61406C31.7629 2.58242 32.3168 2.55937 32.8668 2.58594C33.5622 2.61953 34.2524 2.71836 34.9336 2.87695C35.7782 3.07344 36.5876 3.35859 37.3575 3.75469C37.9329 4.05117 38.4793 4.39414 38.9719 4.81602C39.2946 5.09297 39.625 5.36602 39.9161 5.67461C40.2754 6.05508 40.6418 6.43516 40.8676 6.92227C41.0376 7.28984 41.1586 7.67031 41.1922 8.07227C41.2336 8.57266 41.284 9.07461 41.2797 9.57578C41.2754 10.0547 41.2098 10.5332 41.1637 11.0113C41.0579 12.1004 40.8215 13.166 40.5336 14.2176C40.2934 15.0862 40.0212 15.9456 39.7176 16.7941C39.4407 17.5766 39.1208 18.3445 38.7977 19.1098C38.5596 19.6763 38.3011 20.2341 38.0227 20.782C37.4938 21.818 36.9438 22.8434 36.3075 23.8199C36.1977 23.9883 36.0934 24.1609 35.9864 24.3332C36.2641 24.5203 36.5786 24.5863 36.895 24.6207C37.1961 24.6531 37.5032 24.673 37.804 24.6504C38.2856 24.6145 38.7657 24.5457 39.2446 24.4789C39.7188 24.4125 40.1833 24.2777 40.6708 24.3133C41.1567 24.3488 41.5051 24.7184 41.4719 25.1738C41.4508 25.4621 41.3184 25.7094 41.127 25.9207C40.2227 26.9184 39.0875 27.523 37.7891 27.8211C37.2958 27.9344 36.7872 27.9926 36.2821 28.0398C35.8508 28.0779 35.4174 28.0881 34.9848 28.0703C34.6676 28.0586 34.3532 27.9859 34.029 27.9391C33.9961 28.2355 33.9653 28.5445 33.9278 28.8523L33.7766 30.0332C33.7309 30.4074 33.6954 30.7832 33.6481 31.1574C33.602 31.5207 33.5446 31.882 33.4961 32.2449C33.4512 32.5828 33.418 32.9227 33.3672 33.2602C33.2903 33.7773 33.2165 34.2957 33.1153 34.809C32.9942 35.4223 32.809 36.016 32.5055 36.5695C32.136 37.2449 31.6122 37.7594 30.945 38.1402C30.2575 38.5328 29.5055 38.7371 28.7442 38.9082C28.2043 39.0297 27.6493 39.0492 27.1028 38.9996C26.1555 38.9141 25.3469 38.509 24.7356 37.7742C24.1524 37.073 23.7575 36.2699 23.6165 35.3602C23.5501 34.9273 23.4985 34.4923 23.4618 34.0559C23.4195 33.5707 23.3877 33.0846 23.3665 32.598V32.598ZM24.4313 26.366C24.4372 26.6902 24.4036 27.0145 24.4051 27.3387C24.4118 28.8477 24.4227 30.357 24.4356 31.8664C24.4379 32.1129 24.4501 32.3602 24.4676 32.6063C24.5047 33.1219 24.5415 33.6379 24.5915 34.152C24.6274 34.5172 24.6762 34.8812 24.7336 35.2437C24.8157 35.7566 25.0493 36.2137 25.3141 36.6508C25.5422 37.0266 25.8395 37.3453 26.2305 37.5656C26.8954 37.9395 27.6106 37.9707 28.3317 37.8332C28.8188 37.7406 29.2977 37.591 29.7704 37.4367C30.2356 37.2875 30.6603 37.0335 31.0118 36.6941C31.3434 36.373 31.5786 35.9812 31.7372 35.5488C32.0446 34.7105 32.1411 33.8273 32.268 32.9516C32.3157 32.6234 32.3571 32.2945 32.4004 31.966C32.4501 31.5922 32.5 31.2187 32.5477 30.8449C32.5836 30.566 32.6157 30.2875 32.6497 30.009C32.6985 29.609 32.7497 29.2094 32.7961 28.8094C32.8317 28.5 32.8614 28.1895 32.8934 27.8793C32.934 27.4828 32.9774 27.0875 33.0129 26.6902C33.0395 26.3895 33.0286 26.0828 33.0821 25.7871C33.1801 25.2453 33.4364 24.7844 33.9168 24.4859C34.1176 24.3617 34.345 24.2797 34.5676 24.1742L34.5293 24.116C34.3235 23.8488 34.1125 23.5859 33.9106 23.3156C33.5934 22.8914 33.3653 22.4184 33.136 21.943C32.9188 21.4922 32.6532 21.0656 32.4247 20.6199C32.0258 19.8426 31.6196 19.0672 31.252 18.2754C30.7899 17.2793 30.4258 16.2488 30.3114 15.1457C30.2626 14.6793 30.2501 14.2129 30.345 13.7508C30.4961 13.0125 30.8813 12.4352 31.5297 12.0391C32.1313 11.6719 32.8012 11.5531 33.4875 11.516C33.9133 11.493 34.3418 11.5117 34.7836 11.5117L34.7692 11.4371C34.4942 10.8621 34.2375 10.2773 33.9364 9.71641C33.5122 8.92422 32.9684 8.21016 32.3637 7.54727C31.9175 7.05437 31.4272 6.60327 30.8989 6.19961C30.3762 5.80391 29.8254 5.45039 29.2376 5.16172C28.5392 4.81433 27.8016 4.55203 27.0407 4.38047C26.3043 4.21719 25.5641 4.11719 24.8086 4.10898C24.1649 4.10195 23.5251 4.13164 22.8977 4.27656C21.9508 4.4957 21.0848 4.88555 20.3321 5.5168C19.9152 5.86627 19.5427 6.26562 19.2231 6.70586C18.8454 7.22344 18.5415 7.78359 18.2813 8.36992C17.9243 9.175 17.6793 10.0121 17.5114 10.873C17.4278 11.3027 17.3622 11.7352 17.2954 12.1676C17.2719 12.3195 17.2704 12.4738 17.2563 12.6477L17.5422 12.4988L17.8211 12.3738C18.7653 11.9422 19.743 11.6645 20.7938 11.6961C21.2407 11.7094 21.6672 11.798 22.0649 11.9938C22.8266 12.3695 23.2719 13.0082 23.4657 13.816C23.5993 14.3738 23.6911 14.9426 23.7801 15.5102C23.8497 15.9531 23.9211 16.4008 23.929 16.8477C23.9403 17.5008 23.9075 18.1555 23.8719 18.8082C23.8415 19.3633 23.7267 19.9104 23.5313 20.4309C23.1782 21.3746 22.7844 22.3031 22.4168 23.2414C22.2954 23.5516 22.202 23.8723 22.0876 24.2133L22.5516 24.2137C22.6079 24.2148 22.6653 24.2164 22.7196 24.2293C23.1418 24.3289 23.5086 24.5203 23.809 24.8453C24.2106 25.2766 24.4208 25.7813 24.4313 26.366V26.366ZM16.3661 21.8914C16.1267 21.3282 15.9823 20.7292 15.9387 20.1188C15.8981 19.543 15.9665 18.9703 16.0258 18.3969C16.0829 17.8418 16.1313 17.284 16.1477 16.727C16.1754 15.8102 16.1137 14.8957 16.07 13.9797C16.0438 13.4344 16.1071 12.8824 16.1555 12.3359C16.1993 11.8437 16.254 11.3504 16.3473 10.8652C16.5032 10.0512 16.7106 9.24883 17.0055 8.47109C17.2848 7.73359 17.6067 7.01602 18.0598 6.36953C18.3711 5.92578 18.7235 5.51211 19.0622 5.07852L18.9614 5.04258C17.8586 4.69258 16.7376 4.41836 15.584 4.29922C15.0391 4.24258 14.4918 4.20977 13.9454 4.17695C13.7774 4.16719 13.6071 4.18984 13.4387 4.20586C13.0219 4.24609 12.5997 4.26172 12.1895 4.33984C11.4915 4.47266 10.8215 4.69609 10.2016 5.05977C9.653 5.38259 9.17202 5.80852 8.78521 6.31406C8.35279 6.87305 8.06099 7.50508 7.85201 8.17852C7.60513 8.97344 7.48716 9.7918 7.45552 10.6172C7.42779 11.341 7.41412 12.0688 7.53912 12.7898C7.63169 13.3262 7.6938 13.8688 7.79615 14.4035C7.93373 15.1327 8.0882 15.8585 8.25943 16.5805C8.50669 17.6133 8.75435 18.6469 9.04771 19.6672C9.32818 20.6441 9.64419 21.6125 9.98794 22.5695C10.2684 23.3504 10.593 24.1168 10.9348 24.8727C11.1575 25.3652 11.427 25.8395 11.7098 26.3004C12.0102 26.7902 12.3524 27.2551 12.8157 27.6105C13.4012 28.059 13.854 28.1289 14.4493 27.6363C14.704 27.4258 14.9192 27.1648 15.1411 26.9168C15.493 26.523 15.8329 26.1176 16.1836 25.7219C16.6301 25.2184 17.0821 24.7199 17.5309 24.218C17.6258 24.1121 17.7176 24.0027 17.8098 23.8957L17.6563 23.7617C17.1029 23.233 16.6638 22.5965 16.3661 21.8914V21.8914ZM33.2961 6.89023C33.6633 7.3167 34.0115 7.75905 34.3399 8.21602C34.9693 9.09862 35.4759 10.0626 35.8458 11.0816C36.0098 11.5328 36.1411 11.9883 36.0825 12.4816C36.0418 12.8273 36.0446 13.1777 36.0145 13.5254C35.9891 13.8145 35.943 14.102 35.9059 14.3902C35.8497 14.8246 35.7684 15.2582 35.7442 15.6945C35.7208 16.1102 35.7454 16.5297 35.7715 16.9457C35.7977 17.3688 35.8547 17.7898 35.8934 18.2117C35.9372 18.691 35.9965 19.1691 36.0098 19.6492C36.0208 20.043 35.9856 20.4387 35.9516 20.8324C35.9079 21.3042 35.7934 21.7667 35.6118 22.2043C35.4856 22.5145 35.3352 22.8145 35.1934 23.1246L35.2504 23.1848L35.3372 23.252L35.4251 23.0957C36.1627 21.9351 36.8181 20.7242 37.3864 19.4719C37.7508 18.6636 38.0964 17.8469 38.4231 17.0227C38.9324 15.7413 39.3439 14.4232 39.654 13.0797C39.7946 12.4766 39.9024 11.8641 39.9977 11.2516C40.0723 10.7727 40.134 10.2883 40.1481 9.80508C40.1625 9.29258 40.1344 8.77617 40.0872 8.26523C40.0516 7.8793 39.9563 7.49102 39.7149 7.17656C39.3258 6.67148 38.9063 6.18867 38.3903 5.80625C37.9555 5.48477 37.5219 5.15391 37.0559 4.88359C36.3165 4.4543 35.5161 4.16914 34.6797 3.97461C33.8629 3.78438 33.0364 3.70234 32.2043 3.68477C31.7137 3.67422 31.2208 3.72695 30.7313 3.77344C30.2875 3.81484 29.8465 3.88594 29.4001 3.94453C29.8793 4.21406 30.3524 4.45391 30.7977 4.73633C31.7352 5.33008 32.5758 6.04453 33.2961 6.89023V6.89023ZM21.1165 23.5164C21.4192 22.5477 21.8321 21.6219 22.2317 20.6914C22.5563 19.9363 22.7333 19.1414 22.7922 18.3242C22.8215 17.9215 22.8137 17.5137 22.7938 17.1098C22.7744 16.6604 22.7332 16.2122 22.6704 15.7668C22.5864 15.1988 22.4911 14.6305 22.3567 14.073C22.211 13.4699 21.8438 13.0496 21.2141 12.8945C20.8309 12.8004 20.4497 12.8043 20.0618 12.8656C19.1153 13.0145 18.2489 13.3633 17.4418 13.8742C17.2793 13.977 17.1895 14.0602 17.218 14.2926C17.2774 14.7863 17.2903 15.2879 17.2879 15.7859C17.2848 16.491 17.2547 17.1961 17.2282 17.9008C17.2196 18.1301 17.1864 18.359 17.1614 18.5875C17.1239 18.9375 17.0508 19.2871 17.0532 19.6367C17.0555 19.9969 17.0922 20.3652 17.1797 20.7141C17.4575 21.8203 18.045 22.725 19.0086 23.3637C19.6012 23.7566 20.2567 23.9543 20.9766 23.9922C21.0243 23.827 21.0684 23.6711 21.1165 23.5164V23.5164ZM19.9852 14.0285C19.8583 13.7625 19.9309 13.5418 20.2247 13.4395C20.2965 13.4148 20.37 13.3875 20.4442 13.3805C20.5469 13.3703 20.6504 13.3777 20.754 13.3777C21.127 13.3801 21.4856 13.432 21.793 13.6688C21.9907 13.8211 22.0438 14.0223 21.9157 14.2301C21.734 14.5242 21.4579 14.6719 21.118 14.7C20.5833 14.7441 20.2079 14.4949 19.9852 14.0285V14.0285ZM34.8192 13.9313L34.9407 12.8668C34.9583 12.7246 34.8836 12.6855 34.7641 12.682C34.3879 12.6719 34.0122 12.6582 33.636 12.652C33.2126 12.6441 32.7997 12.7121 32.4075 12.873C31.9723 13.0523 31.6411 13.3391 31.5055 13.8129C31.4063 14.162 31.375 14.527 31.4133 14.8879C31.4662 15.4464 31.5927 15.9954 31.7895 16.5207C32.0528 17.2211 32.3278 17.9211 32.6571 18.5922C33.1028 19.5004 33.6067 20.3801 34.0801 21.2746C34.2063 21.5133 34.3133 21.7629 34.445 22.0414C34.7108 21.4873 34.8559 20.8831 34.8708 20.2688C34.8836 19.7605 34.8434 19.2512 34.8137 18.743C34.7954 18.432 34.7512 18.1227 34.7211 17.8125C34.6793 17.3805 34.6153 16.948 34.6051 16.5148C34.5954 16.0742 34.6266 15.6312 34.6641 15.191C34.6993 14.7699 34.7688 14.3516 34.8192 13.9313V13.9313ZM33.9719 13.5898C33.8321 13.9754 33.5336 14.1934 33.1461 14.257C32.7852 14.3168 32.4688 14.1836 32.2336 13.8953C32.0661 13.6902 32.1301 13.4477 32.3813 13.3086C32.6696 13.1492 32.9864 13.109 33.3602 13.0848C33.4622 13.1031 33.6145 13.1191 33.7598 13.1602C33.9704 13.2195 34.0485 13.3789 33.9719 13.5898V13.5898ZM22.8008 25.466C22.5946 25.2973 22.3211 25.2875 22.1251 25.4727C21.8813 25.7031 21.6668 25.9664 21.4524 26.2258C21.2051 26.5258 20.9723 26.8375 20.6536 27.0699C20.1891 27.4078 19.6465 27.5477 19.102 27.6801C18.6692 27.7855 18.234 27.8836 17.8001 27.9844L17.7946 28.0406C17.9235 28.1 18.0481 28.1746 18.1829 28.2172C18.845 28.4266 19.5188 28.5313 20.2188 28.4719C20.7235 28.4285 21.2047 28.3184 21.6606 28.1023C22.2883 27.8051 22.7715 27.3336 23.1821 26.7859C23.2508 26.6945 23.2821 26.5594 23.2899 26.4414C23.3176 26.025 23.1063 25.7152 22.8008 25.466V25.466ZM34.8887 25.2855C34.5641 25.3945 34.3001 25.5605 34.2215 25.9117C34.168 26.1492 34.1485 26.3949 34.1278 26.6383C34.1239 26.6813 34.1774 26.7602 34.218 26.7711C34.468 26.8371 34.7196 26.9148 34.9751 26.9379C35.2895 26.9664 35.609 26.9574 35.9254 26.9418C36.2668 26.9246 36.6106 26.9023 36.9473 26.8461C37.7399 26.7125 38.5075 26.4961 39.1887 26.0461C39.4348 25.884 39.6778 25.7184 39.9223 25.5535L39.902 25.5188C39.6415 25.5574 39.3817 25.6047 39.12 25.6324C38.5872 25.6895 38.054 25.7496 37.5192 25.7805C37.261 25.7953 36.9993 25.7457 36.7391 25.7246C36.3024 25.6891 35.8758 25.5922 35.5067 25.3586C35.2938 25.2242 35.1157 25.2094 34.8887 25.2855V25.2855Z" fill="#424242" fill-opacity="0.972549"/>
<path d="M1.10742 40.3062C1.66828 40.2153 2.23573 40.1711 2.80391 40.1742C3.67695 40.1742 4.31719 40.3773 4.72344 40.743C5.09922 41.068 5.32266 41.5656 5.32266 42.1754C5.32266 42.7949 5.13945 43.2824 4.79414 43.6379C4.32695 44.1355 3.56523 44.3895 2.70195 44.3895C2.43789 44.3895 2.19414 44.3793 1.99141 44.3285V47.0711H1.10742V40.3062V40.3062ZM1.99141 43.607C2.18437 43.6578 2.42812 43.6781 2.72266 43.6781C3.78867 43.6781 4.43906 43.1602 4.43906 42.2156C4.43906 41.3117 3.79922 40.875 2.82422 40.875C2.43828 40.875 2.14375 40.9055 1.99141 40.9461V43.607V43.607ZM10.675 44.5719C10.675 46.3898 9.41524 47.1824 8.22695 47.1824C6.89649 47.1824 5.8707 46.2074 5.8707 44.6531C5.8707 43.0078 6.94726 42.043 8.3082 42.043C9.72031 42.0426 10.675 43.0687 10.675 44.5719V44.5719ZM6.775 44.6227C6.775 45.6992 7.39453 46.5117 8.26797 46.5117C9.12109 46.5117 9.76055 45.7094 9.76055 44.6023C9.76055 43.7695 9.34453 42.7133 8.28789 42.7133C7.23125 42.7133 6.775 43.6883 6.775 44.6227ZM11.6801 46.1563C11.9441 46.3289 12.4113 46.5117 12.8582 46.5117C13.5082 46.5117 13.8129 46.1867 13.8129 45.7805C13.8129 45.3539 13.5594 45.1203 12.8988 44.8766C12.0152 44.5617 11.5988 44.0742 11.5988 43.4852C11.5988 42.693 12.2387 42.043 13.2949 42.043C13.7926 42.043 14.2297 42.1852 14.5039 42.3477L14.2805 42.9977C13.9782 42.8114 13.6301 42.7129 13.275 42.7133C12.7469 42.7133 12.4523 43.018 12.4523 43.3836C12.4523 43.7898 12.7473 43.9727 13.3871 44.2164C14.2402 44.5414 14.677 44.968 14.677 45.6992C14.677 46.5625 14.0066 47.1719 12.8387 47.1719C12.3004 47.1719 11.8027 47.0398 11.4574 46.8367L11.6801 46.1563V46.1563ZM16.9008 40.7426V42.1543H18.1801V42.8348H16.9008V45.4855C16.9008 46.0949 17.073 46.4402 17.5711 46.4402C17.7457 46.4428 17.9198 46.4223 18.0891 46.3793L18.1297 47.0496C17.9574 47.1207 17.6828 47.1715 17.3379 47.1715C16.9215 47.1715 16.5859 47.0395 16.3727 46.7957C16.1191 46.5316 16.0273 46.0949 16.0273 45.516V42.8348H15.2656V42.1543H16.0273V40.9762L16.9008 40.7426V40.7426ZM23.3602 42.1547C23.3395 42.5102 23.3195 42.9062 23.3195 43.5055V46.3594C23.3195 47.4867 23.0961 48.1773 22.6188 48.6043C22.1414 49.0512 21.4508 49.1934 20.8313 49.1934C20.2422 49.1934 19.5922 49.0512 19.1957 48.7871L19.4191 48.1066C19.7441 48.3098 20.252 48.4926 20.8613 48.4926C21.7754 48.4926 22.4457 48.0152 22.4457 46.7762V46.2277H22.4254C22.1512 46.6848 21.623 47.0504 20.8613 47.0504C19.6426 47.0504 18.7691 46.0145 18.7691 44.6531C18.7691 42.9875 19.8559 42.043 20.9832 42.043C21.8367 42.043 22.3039 42.4898 22.5172 42.8961H22.5375L22.5781 42.1547H23.3602V42.1547ZM22.4359 44.0945C22.4359 43.9422 22.4258 43.8102 22.3852 43.6883C22.2227 43.1703 21.7859 42.7438 21.1359 42.7438C20.2824 42.7438 19.6734 43.4648 19.6734 44.6023C19.6734 45.5672 20.1609 46.3695 21.1258 46.3695C21.6742 46.3695 22.1719 46.0242 22.3648 45.4555C22.4156 45.3031 22.4363 45.1305 22.4363 44.9781V44.0945H22.4359ZM24.741 43.6883C24.741 43.1094 24.7309 42.6117 24.7004 42.1547H25.4828L25.5129 43.1195H25.5535C25.777 42.4594 26.3152 42.043 26.9145 42.043C27.016 42.043 27.0867 42.0531 27.168 42.0734V42.9164C27.068 42.8947 26.9659 42.8844 26.8637 42.8859C26.234 42.8859 25.7867 43.3633 25.6652 44.0336C25.6402 44.171 25.6266 44.3103 25.6246 44.45V47.0703H24.741V43.6883ZM28.4586 44.775C28.4789 45.9836 29.2504 46.4812 30.1441 46.4812C30.7844 46.4812 31.1699 46.3695 31.5051 46.2273L31.6574 46.8672C31.3426 47.0094 30.8043 47.1719 30.0223 47.1719C28.509 47.1719 27.6051 46.1766 27.6051 44.6938C27.6051 43.2109 28.4785 42.0426 29.9105 42.0426C31.5152 42.0426 31.9418 43.4543 31.9418 44.3582C31.9418 44.541 31.9215 44.6832 31.9113 44.7746H28.4586V44.775ZM31.0789 44.1352C31.0887 43.5664 30.8449 42.6828 29.8398 42.6828C28.9359 42.6828 28.5398 43.5156 28.4684 44.1352H31.0789V44.1352ZM32.9574 45.9938C33.4362 46.2814 33.9833 46.4356 34.5418 46.4406C35.4457 46.4406 35.9738 45.9633 35.9738 45.2727C35.9738 44.6328 35.6082 44.2672 34.684 43.9117C33.5668 43.5156 32.8762 42.9367 32.8762 41.9719C32.8762 40.9055 33.7598 40.1133 35.0902 40.1133C35.791 40.1133 36.2988 40.2758 36.6035 40.4484L36.3598 41.1695C35.9602 40.9547 35.5134 40.843 35.0598 40.8445C34.1254 40.8445 33.7699 41.4031 33.7699 41.8703C33.7699 42.5102 34.1859 42.825 35.1309 43.1906C36.2887 43.6379 36.8777 44.1961 36.8777 45.2016C36.8777 46.2578 36.0957 47.1719 34.4809 47.1719C33.8207 47.1719 33.0996 46.9789 32.7336 46.7352L32.9574 45.9938V45.9938ZM43.7332 48.0758C42.8503 47.8441 41.9763 47.5798 41.1129 47.2836C40.9707 47.2328 40.8285 47.182 40.6965 47.182C39.0715 47.1211 37.6801 45.9227 37.6801 43.7187C37.6801 41.525 39.0207 40.1133 40.8691 40.1133C42.7277 40.1133 43.9367 41.5555 43.9367 43.5766C43.9367 45.3336 43.1242 46.4609 41.9867 46.857V46.8977C42.6672 47.0703 43.4086 47.2328 43.9875 47.3344L43.7332 48.0758V48.0758ZM43.002 43.6172C43.002 42.2461 42.2914 40.834 40.8387 40.834C39.3457 40.834 38.6145 42.2152 38.6246 43.6984C38.6145 45.1508 39.4168 46.4609 40.798 46.4609C42.2102 46.4609 43.002 45.1813 43.002 43.6172V43.6172ZM45.0836 40.225H45.9676V46.3289H48.8926V47.0703H45.0836V40.225Z" fill="#424242" fill-opacity="0.972549"/>
</svg>

        </>
    )
}
