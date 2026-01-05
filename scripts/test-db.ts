import dotenv from 'dotenv';

// Load environment variables
const envLocal = dotenv.config({ path: '.env.local' });
const envMain = dotenv.config({ path: '.env' });

console.log('Keys in .env.local:', envLocal.parsed ? Object.keys(envLocal.parsed) : 'None');
console.log('Keys in .env:', envMain.parsed ? Object.keys(envMain.parsed) : 'None');

const testConnection = async () => {
    console.log('🧪 Testing database connection...');

    try {
        // Dynamic import to ensure env vars are loaded first
        const { connectToDatabase } = await import('../database/mongoose');

        await connectToDatabase();
        console.log('✅ Database connection successful!');
        process.exit(0);
    } catch (error) {
        console.error('❌ Database connection failed:', error);
        process.exit(1);
    }
};

testConnection();
