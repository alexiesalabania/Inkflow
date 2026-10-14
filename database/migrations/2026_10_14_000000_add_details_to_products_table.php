<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Adds the extra columns used by the Inkflow product screens.
     * The original `product` (name) and `price` columns are kept as-is.
     */
    public function up(): void
    {
        Schema::table('products', function (Blueprint $table) {
            $table->string('category')->default('General')->after('product');
            $table->unsignedInteger('stock')->default(0)->after('price');
            $table->string('status')->default('Active')->after('stock');
            $table->text('description')->nullable()->after('status');
        });
    }

    public function down(): void
    {
        Schema::table('products', function (Blueprint $table) {
            $table->dropColumn(['category', 'stock', 'status', 'description']);
        });
    }
};
