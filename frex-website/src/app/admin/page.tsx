import { prisma } from '@/lib/prisma';

export default async function AdminDashboard() {
  const [applications, contacts] = await Promise.all([
    prisma.jobApplication.findMany({
      orderBy: { createdAt: 'desc' },
      take: 10,
    }),
    prisma.contactSubmission.findMany({
      orderBy: { createdAt: 'desc' },
      take: 10,
    }),
  ]);

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Job Applications */}
          <div className="bg-gray-900 rounded-2xl p-6">
            <h2 className="text-xl font-bold mb-4">Recent Job Applications</h2>
            <div className="space-y-4">
              {applications.map((app) => (
                <div key={app.id} className="border-b border-gray-800 pb-4 last:border-0">
                  <p className="font-semibold">{app.name}</p>
                  <p className="text-sm text-gray-400">{app.role}</p>
                  <p className="text-sm text-cyan-400">{app.email}</p>
                  <time className="text-xs text-gray-500">
                    {new Date(app.createdAt).toLocaleDateString()}
                  </time>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Submissions */}
          <div className="bg-gray-900 rounded-2xl p-6">
            <h2 className="text-xl font-bold mb-4">Recent Contact Submissions</h2>
            <div className="space-y-4">
              {contacts.map((contact) => (
                <div key={contact.id} className="border-b border-gray-800 pb-4 last:border-0">
                  <p className="font-semibold">{contact.name}</p>
                  <p className="text-sm text-cyan-400">{contact.email}</p>
                  <p className="text-sm text-gray-400 truncate">{contact.message}</p>
                  <time className="text-xs text-gray-500">
                    {new Date(contact.createdAt).toLocaleDateString()}
                  </time>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}