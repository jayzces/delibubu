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
                        <tr v-for="order in filterBy(filter[activeTab])"
                            :key="order.order_no">
                            <td>
                                <div class="order__no">
                                    Order No. {{ order.order_no }}
                                </div>
                                <div class="order__details ellipsis"
                                    v-if="order.order_type == 'es' ||
                                        order.order_type == 'cdd'">
                                    {{ order.description }}
                                </div>

                                <div class="order__details"
                                    v-else-if="order.order_type == 'bp'">
                                    {{ order.recipient }}
                                    {{ order.description }}
                                </div>

                                <div class="order__details" v-else>
                                    {{ order.no_of_items }} item(s) for
                                    {{ order.recipient }},
                                    {{ order.contact_no }}
                                </div>
                            </td>
                            <td class="total" v-if="order.total > 0">
                                {{ order.total | currency }}
                            </td>
                            <td class="total" v-else>
                                {{ order.total }}
                            </td>
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
                    'Grocery Services',
                    'Errand Services',
                    'Cash Delivery / Deposit',
                    'Bills Payment'
                ],
                activeTab: 0,
                filter: [
                    'all',
                    'fpd',
                    'gs',
                    'es',
                    'cdd',
                    'bp'
                ],
                orders: [
                    // fpd orders
                    {
                        order_no: 'b5af9403-df90-5ecc-bb78-6eff525df87e',
                        order_type: 'fpd',
                        no_of_items: 1,
                        recipient: 'Tom Fields',
                        contact_no: '+639123456789',
                        description: '',
                        total: 605.00,
                        status: 'Pending',
                        status_remarks: 'Pending Staff Approval'
                    }, {
                        order_no: '10d12d41-03e0-5045-be76-402f4b90891e',
                        order_type: 'fpd',
                        no_of_items: 8,
                        recipient: 'Myrtle Massey',
                        contact_no: '+639123456789',
                        description: '',
                        total: 241.24,
                        status: 'Order Approved',
                        status_remarks: ''
                    }, {
                        order_no: 'f465d5c1-6522-541a-8b8f-625f663f2a53',
                        order_type: 'fpd',
                        no_of_items: 8,
                        recipient: 'Ruth Lambert',
                        contact_no: '+639123456789',
                        description: '',
                        total: 972.09,
                        status: 'Order Denied',
                        status_remarks: 'Invalid Transaction'
                    }, {
                        order_no: 'c15df0f9-2d3e-5a1e-981b-9d350ce56394',
                        order_type: 'fpd',
                        no_of_items: 9,
                        recipient: 'Jacob Webster',
                        contact_no: '+639123456789',
                        description: '',
                        total: 864.67,
                        status: 'Processing',
                        status_remarks: ''
                    }, {
                        order_no: 'acbc0fd3-6e6d-5491-bc0d-6b1cad3d071e',
                        order_type: 'fpd',
                        no_of_items: 8,
                        recipient: 'Charles Phelps',
                        contact_no: '+639123456789',
                        description: '',
                        total: 748.98,
                        status: 'In Delivery',
                        status_remarks: ''
                    }, {
                        order_no: 'ee805461-ade5-5bff-841e-192563ee9fd1',
                        order_type: 'fpd',
                        no_of_items: 3,
                        recipient: 'Harry Franklin',
                        contact_no: '+639123456789',
                        description: '',
                        total: 78.72,
                        status: 'Delivered',
                        status_remarks: ''
                    }, {
                        order_no: '29d84857-6718-5a29-8046-3df3ac7b6b91',
                        order_type: 'fpd',
                        no_of_items: 1,
                        recipient: 'Kenneth Bass',
                        contact_no: '+639123456789',
                        description: '',
                        total: 838.07,
                        status: 'Completed',
                        status_remarks: ''
                    }, {
                        order_no: '70f93d96-34c4-56e3-a4c8-737c8f8ceb64',
                        order_type: 'fpd',
                        no_of_items: 2,
                        recipient: 'Cameron Medina',
                        contact_no: '+639123456789',
                        description: '',
                        total: 12.67,
                        status: 'Cancelled',
                        status_remarks: ''
                    },
                    // gs orders
                    {
                        order_no: '8f01815b-2ec7-5e3c-bbd3-ace1d7487a85',
                        order_type: 'gs',
                        no_of_items: 7,
                        recipient: 'Luke Leonard',
                        contact_no: '+639123456789',
                        description: '',
                        total: 'TBD',
                        status: 'Pending',
                        status_remarks: 'Pending Staff Approval'
                    }, {
                        order_no: '00e70326-786a-5d3e-8a86-28ec10e339ac',
                        order_type: 'gs',
                        no_of_items: 1,
                        recipient: 'Randall Sandoval',
                        contact_no: '+639123456789',
                        description: '',
                        total: 'TBD',
                        status: 'Order Approved',
                        status_remarks: ''
                    }, {
                        order_no: 'f6f641cf-e35c-57bd-ad87-9348027ac99d',
                        order_type: 'gs',
                        no_of_items: 10,
                        recipient: 'Phillip Walters',
                        contact_no: '+639123456789',
                        description: '',
                        total: 'TBD',
                        status: 'Order Denied',
                        status_remarks: 'Services Unavailable'
                    }, {
                        order_no: '6b066f08-3b91-53e2-9fe9-1200c8c9ef48',
                        order_type: 'gs',
                        no_of_items: 2,
                        recipient: 'Maude Castillo',
                        contact_no: '+639123456789',
                        description: '',
                        total: 'TBD',
                        status: 'Processing',
                        status_remarks: ''
                    }, {
                        order_no: '9b683100-c961-5e04-b2f5-a34a369a81ae',
                        order_type: 'gs',
                        no_of_items: 3,
                        recipient: 'Lloyd Wheeler',
                        contact_no: '+639123456789',
                        description: '',
                        total: 2666.34,
                        status: 'In Delivery',
                        status_remarks: ''
                    }, {
                        order_no: '5e3d64e7-30af-5ec1-b766-14d1ab2aa344',
                        order_type: 'gs',
                        no_of_items: 10,
                        recipient: 'Cynthia Hunt',
                        contact_no: '+639123456789',
                        description: '',
                        total: 2140.52,
                        status: 'Delivered',
                        status_remarks: ''
                    }, {
                        order_no: 'a871b741-f146-5100-b426-66ab8ae0f0ea',
                        order_type: 'gs',
                        no_of_items: 10,
                        recipient: 'Julia Adams',
                        contact_no: '+639123456789',
                        description: '',
                        total: 1334.50,
                        status: 'Completed',
                        status_remarks: ''
                    }, {
                        order_no: '98f710ee-8921-5e63-9879-f56be05de479',
                        order_type: 'gs',
                        no_of_items: 10,
                        recipient: 'Seth Newman',
                        contact_no: '+639123456789',
                        description: '',
                        total: '-',
                        status: 'Cancelled',
                        status_remarks: ''
                    },
                    // es orders
                    {
                        order_no: '6cb9c431-7821-51d4-9b1e-ab69aeece65a',
                        order_type: 'es',
                        no_of_items: 1,
                        recipient: 'Jackson Aguilar',
                        contact_no: '+639123456789',
                        description: 'Amet aliqua veniam ea incididunt adipisicing occaecat amet elit laborum sint voluptate est.',
                        total: 'TBD',
                        status: 'Pending',
                        status_remarks: 'Pending Staff Approval'
                    }, {
                        order_no: 'a9a8b8c3-a004-5ff8-8704-579aaacb1e34',
                        order_type: 'es',
                        no_of_items: 1,
                        recipient: 'Violet Malone',
                        contact_no: '+639123456789',
                        description: 'Tempor magna ipsum tempor laborum reprehenderit cillum veniam consequat duis laborum mollit.',
                        total: 4612.90,
                        status: 'Order Approved',
                        status_remarks: ''
                    }, {
                        order_no: 'd919ba8a-abaf-52fe-a216-31de5f740ef6',
                        order_type: 'es',
                        no_of_items: 1,
                        recipient: 'Eddie Haynes',
                        contact_no: '+639123456789',
                        description: 'Culpa est esse non adipisicing do in fugiat consectetur ea ullamco pariatur reprehenderit aliqua.',
                        total: 1726.30,
                        status: 'Order Denied',
                        status_remarks: 'Services Unavailable'
                    }, {
                        order_no: '02aff92a-2e36-5787-b19a-884e9ec1575c',
                        order_type: 'es',
                        no_of_items: 1,
                        recipient: 'Bill Ferguson',
                        contact_no: '+639123456789',
                        description: 'Commodo consectetur cillum tempor voluptate exercitation et ex dolor eu pariatur laborum aliqua veniam magna.',
                        total: 4818.32,
                        status: 'Processing',
                        status_remarks: ''
                    }, {
                        order_no: '27365cd0-2fbc-5094-a8c2-b90e2b350c71',
                        order_type: 'es',
                        no_of_items: 1,
                        recipient: 'Isabel Fowler',
                        contact_no: '+639123456789',
                        description: 'Elit cillum ex reprehenderit adipisicing.',
                        total: 5531.50,
                        status: 'Completed',
                        status_remarks: ''
                    }, {
                        order_no: 'aaf3d20f-0782-56ce-bbfb-86ae1751d0b0',
                        order_type: 'es',
                        no_of_items: 1,
                        recipient: 'Johanna Tyler',
                        contact_no: '+639123456789',
                        description: 'Nulla do qui aliqua ea tempor culpa proident est sit aliqua labore non irure.',
                        total: 4034.54,
                        status: 'Cancelled',
                        status_remarks: ''
                    },
                    // cdd orders
                    {
                        order_no: '47efcdfe-bd62-50b4-baf1-a9c4a5982a3a',
                        order_type: 'cdd',
                        no_of_items: 1,
                        recipient: 'John Lloyd',
                        contact_no: '+639123456789',
                        description: 'Cash Delivery PHP 4,800.00',
                        total: 4845.26,
                        status: 'Pending',
                        status_remarks: 'Pending Staff Approval'
                    }, {
                        order_no: 'dccdb1b6-26e5-5dac-8fe2-e95392e87b65',
                        order_type: 'cdd',
                        no_of_items: 1,
                        recipient: 'Frederick Glover',
                        contact_no: '+639123456789',
                        description: 'Cash Deposit PHP 8,500.00',
                        total: 8576.74,
                        status: 'Order Approved',
                        status_remarks: ''
                    }, {
                        order_no: 'eb5719c4-5e60-5cf7-9bfc-d69974a25cb8',
                        order_type: 'cdd',
                        no_of_items: 1,
                        recipient: 'Peter Todd',
                        contact_no: '+639123456789',
                        description: 'Cash Delivery PHP 2,500.00',
                        total: 2585.02,
                        status: 'Order Denied',
                        status_remarks: 'Services Unavailable'
                    }, {
                        order_no: '5764611c-0670-5757-b4bd-a0638a5fce18',
                        order_type: 'cdd',
                        no_of_items: 1,
                        recipient: 'Jorge Simmons',
                        contact_no: '+639123456789',
                        description: 'Cash Delivery PHP 5,800.00',
                        total: 5860.99,
                        status: 'Processing',
                        status_remarks: ''
                    }, {
                        order_no: '053df5ef-3ced-5a84-b8fd-e31cab0dbac4',
                        order_type: 'cdd',
                        no_of_items: 1,
                        recipient: 'Erik Mendoza',
                        contact_no: '+639123456789',
                        description: 'Cash Deposit PHP 7,100.00',
                        total: 7151.64,
                        status: 'In Delivery',
                        status_remarks: ''
                    }, {
                        order_no: 'ebe7ae0d-90b8-554d-a945-14a7896f73fb',
                        order_type: 'cdd',
                        no_of_items: 1,
                        recipient: 'James Morton',
                        contact_no: '+639123456789',
                        description: 'Cash Delivery PHP 7,800.00',
                        total: 7820.30,
                        status: 'Delivered',
                        status_remarks: ''
                    }, {
                        order_no: '2bada93b-1022-5e7e-bf71-251bad0a7cc0',
                        order_type: 'cdd',
                        no_of_items: 1,
                        recipient: 'Seth Ryan',
                        contact_no: '+639123456789',
                        description: 'Cash Delivery PHP 3,600.00',
                        total: 3677.58,
                        status: 'Completed',
                        status_remarks: ''
                    }, {
                        order_no: '36a7ab33-e388-5e15-aaec-b5aa7d49b6e6',
                        order_type: 'cdd',
                        no_of_items: 1,
                        recipient: 'Ryan Weber',
                        contact_no: '+639123456789',
                        description: 'Cash Delivery PHP 4,600.00',
                        total: 4661.90,
                        status: 'Cancelled',
                        status_remarks: ''
                    },
                    // bp orders
                    {
                        order_no: '77455408-e38b-534b-9994-d3475ed71d44',
                        order_type: 'bp',
                        no_of_items: 1,
                        recipient: 'Zamboanga City Water District (ZCWD)',
                        contact_no: '+639123456789',
                        description: 'PHP 500.00',
                        total: 526.61,
                        status: 'Pending',
                        status_remarks: 'Pending Staff Approval'
                    }, {
                        order_no: '58e274b7-b186-5118-9f2e-06bc7f4a9a3b',
                        order_type: 'bp',
                        no_of_items: 1,
                        recipient: 'Zamboanga City Water District (ZCWD)',
                        contact_no: '+639123456789',
                        description: 'PHP 2,200.00',
                        total: 2238.46,
                        status: 'Order Approved',
                        status_remarks: ''
                    }, {
                        order_no: '8728b457-2567-5f22-82d8-36fe9342d21a',
                        order_type: 'bp',
                        no_of_items: 1,
                        recipient: 'Zamboanga City Water District (ZCWD)',
                        contact_no: '+639123456789',
                        description: 'PHP 2,000.00',
                        total: 2076.81,
                        status: 'Order Denied',
                        status_remarks: 'Services Unavailable'
                    }, {
                        order_no: 'd74f9da1-079c-5e9b-9287-d696cafba419',
                        order_type: 'bp',
                        no_of_items: 1,
                        recipient: 'Zamboanga City Water District (ZCWD)',
                        contact_no: '+639123456789',
                        description: 'PHP 800.00',
                        total: 835.59,
                        status: 'Processing',
                        status_remarks: ''
                    }, {
                        order_no: '8ece5d01-43b3-5833-965d-c4f9550ed7fd',
                        order_type: 'bp',
                        no_of_items: 1,
                        recipient: 'Zamboanga City Water District (ZCWD)',
                        contact_no: '+639123456789',
                        description: 'PHP 400.00',
                        total: 465.7,
                        status: 'In Delivery',
                        status_remarks: ''
                    }, {
                        order_no: '284672d2-d3af-5a87-86a1-2511da153c73',
                        order_type: 'bp',
                        no_of_items: 1,
                        recipient: 'Zamboanga City Electric Cooperative, Inc. (ZAMELCO)',
                        contact_no: '+639123456789',
                        description: 'PHP 2,800.00',
                        total: 2915.29,
                        status: 'Delivered',
                        status_remarks: ''
                    }, {
                        order_no: '7d0f72f9-b0d7-5008-882c-71d03cc4acce',
                        order_type: 'bp',
                        no_of_items: 1,
                        recipient: 'Zamboanga City Electric Cooperative, Inc. (ZAMELCO)',
                        contact_no: '+639123456789',
                        description: 'PHP 500.00',
                        total: 445.87,
                        status: 'Completed',
                        status_remarks: ''
                    }, {
                        order_no: '5bf64711-341e-56f6-94e2-1a62720001e7',
                        order_type: 'bp',
                        no_of_items: 1,
                        recipient: 'Zamboanga City Water District (ZCWD)',
                        contact_no: '+639123456789',
                        description: 'PHP 500.00',
                        total: 1973.34,
                        status: 'Cancelled',
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
            },
            filterBy(attribute) {
                if (attribute == 'all') return this.orders.slice(11, 28)
                return this.orders.filter(obj => obj.order_type == attribute)
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
        table-layout: fixed;
        min-width: 1050px;
        width: 100%;
        border-spacing: 0;
    }

    thead tr {
        background-color: var(--accent1-l90);
    }

    th {
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

    th,
    td {
        padding: 10px 20px;
    }

    @media all and (max-width: 650px) {
        th,
        td {
            padding: 10px 15px;
        }
    }

    td:not(:first-child) {
        text-align: center;
    }

    th:not(:first-child),
    td:not(:first-child) {
        width: 200px;
    }

    @media all and (max-width: 1250px) {
        th:not(:first-child),
        td:not(:first-child) {
            width: 170px;
        }
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

    @media all and (min-width: 1251px) {
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