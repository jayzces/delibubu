<template>
    <main class="orders-page">
        <div class="max-content">
            <h1 class="page-title">My Orders</h1>

            <nav class="tabs">
                <ul>
                    <li v-for="(tab, index) in tabs"
                        :key="tab"
                        :class="{ active: activeTab == index }"
                        @click="handleScroll(index)">{{ tab }}</li>
                </ul>
            </nav>

            <section class="table-wrapper">
                <table>
                    <thead>
                        <tr>
                            <th>Purchase Order</th>
                            <th>Total Payment</th>
                            <th>Status</th>
                            <th>Remarks</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <template v-if="activeTab == 0 || activeTab == 1">
                            <tr v-for="order in fpdOrders"
                                :key="order.order_no">
                                <td>
                                    <div class="order__no">
                                        Order No. {{ order.order_no }}
                                    </div>
                                    <div class="order__details">
                                        {{ order.no_of_items }} item(s) for
                                        {{ order.recipient }},
                                        {{ order.contact_no }}
                                    </div>
                                </td>
                                <td class="total">{{ order.total | currency }}</td>
                                <td :class="{
                                    orange: order.status == 'Pending',
                                    'red bold': order.status == 'Order Denied'
                                        || order.status == 'Cancelled',
                                    'green bold': order.status == 'Completed'
                                }">{{ order.status }}</td>
                                <td>{{ order.status_remarks }}</td>
                                <td>
                                    <button class="red-button"
                                        v-if="order.status == 'Pending'">
                                        Cancel Order
                                    </button>
                                    <button class="orange-button"
                                        v-else-if="order.status == 'Order Denied' || order.status == 'Cancelled'">
                                        Retry Order
                                    </button>
                                    <button class="green-button"
                                        v-else-if="order.status == 'Completed'">
                                        Order Again
                                    </button>
                                </td>
                            </tr>
                        </template>
                    </tbody>
                </table>
            </section>
        </div>
    </main>
</template>

<script>
    export default {
        name: 'OrdersPage',
        data() {
            return {
                tabs: [
                    'All',
                    'Food Pickup and Delivery',
                    'Grocery Service',
                    'Errand Service',
                    'Cash Delivery / Deposit',
                    'Bills Payment'
                ],
                activeTab: 0,
                fpdOrders: [
                    {
                        order_no: 'b5af9403-df90-5ecc-bb78-6eff525df87e',
                        no_of_items: 1,
                        recipient: 'Tom Fields',
                        contact_no: '+639123456789',
                        total: 605.00,
                        status: 'Pending',
                        status_remarks: 'Pending Staff Approval'
                    }, {
                        order_no: '10d12d41-03e0-5045-be76-402f4b90891e',
                        no_of_items: 8,
                        recipient: 'Myrtle Massey',
                        contact_no: '+639123456789',
                        total: 241.24,
                        status: 'Order Approved',
                        status_remarks: ''
                    }, {
                        order_no: 'f465d5c1-6522-541a-8b8f-625f663f2a53',
                        no_of_items: 8,
                        recipient: 'Ruth Lambert',
                        contact_no: '+639123456789',
                        total: 972.09,
                        status: 'Order Denied',
                        status_remarks: 'Invalid Transaction'
                    }, {
                        order_no: 'c15df0f9-2d3e-5a1e-981b-9d350ce56394',
                        no_of_items: 9,
                        recipient: 'Jacob Webster',
                        contact_no: '+639123456789',
                        total: 864.67,
                        status: 'Processing',
                        status_remarks: ''
                    }, {
                        order_no: 'acbc0fd3-6e6d-5491-bc0d-6b1cad3d071e',
                        no_of_items: 8,
                        recipient: 'Charles Phelps',
                        contact_no: '+639123456789',
                        total: 748.98,
                        status: 'In Delivery',
                        status_remarks: ''
                    }, {
                        order_no: 'ee805461-ade5-5bff-841e-192563ee9fd1',
                        no_of_items: 3,
                        recipient: 'Harry Franklin',
                        contact_no: '+639123456789',
                        total: 78.72,
                        status: 'Delivered',
                        status_remarks: ''
                    }, {
                        order_no: '29d84857-6718-5a29-8046-3df3ac7b6b91',
                        no_of_items: 1,
                        recipient: 'Kenneth Bass',
                        contact_no: '+639123456789',
                        total: 838.07,
                        status: 'Completed',
                        status_remarks: ''
                    }, {
                        order_no: '70f93d96-34c4-56e3-a4c8-737c8f8ceb64',
                        no_of_items: 2,
                        recipient: 'Cameron Medina',
                        contact_no: '+639123456789',
                        total: 12.67,
                        status: 'Cancelled',
                        status_remarks: ''
                    }
                ],
                gsOrders: [
                    {
                        order_no: '',
                        no_of_items: 2,
                        recipient: '',
                        contact_no: '+639123456789',
                        total: 0,
                        status: '',
                        status_remarks: ''
                    }
                ]
            }
        },
        methods: {
            handleScroll(index) {
                let promise = new Promise((resolve, reject) => {
                    this.activeTab = index
                    resolve()
                })

                promise.then(() => {
                    let container = document.querySelector('.tabs'),
                        item = container.querySelector('.active')
                    container.scrollLeft = item.offsetLeft
                })

            }
        }
    }
</script>

<style scoped>
    .orders-page {
        padding: 40px 15px 50px;
    }

    @media all and (max-width: 650px) {
        .orders-page {
            padding-left: 0;
            padding-right: 0;
        }

        h1 {
            padding: 0 15px;
        }
    }

    @media all and (max-width: 480px) {
        .orders-page {
            padding-top: 20px;
            padding-bottom: 20px;
        }
    }


    .tabs ul {
        display: flex;
        margin: 0;
        padding: 0;
        list-style-type: none;
    }

    .tabs li {
        margin-top: 10px;
        padding: 0 20px;
        cursor: pointer;
    }

    .tabs li:not(:first-child) {
        position: relative;
    }

    .tabs li:not(:first-child)::before {
        content: "";
        background-color: var(--black-a20);
        display: inline-block;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        margin: auto 0;
        width: 1px;
        height: 100%;
    }

    .tabs .active {
        font-weight: 600;
        color: var(--accent1);
    }

    @media all and (min-width: 651px) {
        .tabs ul {
            flex-wrap: wrap;
            font-size: 20px;
        }

        .tabs li:first-child {
            padding-left: 0;
        }
    }

    @media all and (max-width: 650px) {
        .tabs {
            background-color: var(--white);
            position: sticky;
            top: var(--nav-height);
            margin-top: 10px;
            overflow-x: auto;
            border: 1px solid var(--black-a20);
            border-left: 0;
            border-right: 0;
        }

        .tabs::-webkit-scrollbar {
            height: 0;
        }

        .tabs ul {
            width: max-content;
        }

        .tabs li {
            margin-top: 0;
            padding-top: 15px;
            padding-bottom: 15px;
        }

        .tabs.tabs li::before {
            content: none;
        }
    }


    .table-wrapper {
        margin-top: 30px;
        overflow-x: auto;
    }

     @media all and (max-width: 650px) {
         .table-wrapper {
             margin-top: 15px;
         }
     }


    table {
        min-width: 1050px;
        width: 100%;
        border-spacing: 0;
    }

    thead tr {
        background-color: var(--accent1-l90);
    }

    th {
        padding: 10px 20px;
        font-weight: 600;
    }

    th:first-child {
        text-align: left;
    }

    tbody::before {
        content: "";
        display: table-row;
        height: 10px;
    }

    td {
        padding: 10px 20px;
    }

    td:not(:first-child) {
        text-align: center;
    }


    .order__no {
        font-weight: 600;
    }

    .order__details {
        color: var(--black-a70);
    }

    .total {
        font-weight: 600;
    }

    @media all and (min-width: 651px) {
        .total {
            font-size: 20px;
        }
    }

    .orange {
        color: var(--accent3);
    }

    .red {
        color: var(--accent2);
    }

    .green {
        color: var(--success);
    }

    .bold {
        font-weight: 600;
    }

    .red-button {
        background-color: var(--accent2);
    }

    .orange-button {
        background-color: var(--accent3);
    }

    .green-button {
        background-color: var(--success);
    }
</style>