<template>
    <main class="orders-page">
        <div class="max-content">
            <h1 class="page-title">My Orders</h1>

            <nav class="tabs">
                <ul>
                    <li>All</li>
                    <li>Food Pickup and Delivery</li>
                    <li>Grocery Services</li>
                    <li>Errand Services</li>
                    <li>Cash Delivery / Deposit</li>
                    <li>Bills Payment</li>
                </ul>
            </nav>

            <section class="tab-contents">
                <section class="tab-contents__item">
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
                            <tr v-for="order in orders"
                                :key="order.order_no">
                                <td>
                                    <div class="order__no">{{ order.order_no }}</div>
                                    <div class="order__details">
                                        {{ order.no_of_items }} item(s) for {{ order.recipient }},
                                        {{ order.contact_no }}
                                    </div>
                                </td>
                                <td class="total">{{ order.total }}</td>
                                <td>{{ order.status }}</td>
                                <td>{{ order.status_remarks }}</td>
                                <td>
                                    <button>Cancel Order</button>
                                    <button>Retry Order</button>
                                    <button>Order Again</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </section>
            </section>
        </div>
    </main>
</template>

<script>
    export default {
        name: 'OrdersPage',
        data() {
            return {
                orders: [
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
                ]
            }
        }
    }
</script>

<style scoped>
    .orders-page {
        padding: 40px 15px 50px;
    }
</style>