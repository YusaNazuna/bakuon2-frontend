import Authorization from '@/components/organisms/Authorization';
import AdminTemplate from '@/components/templates/adminTemplate';
import AdminNovel from '@/components/pages/admin/AdminNovel';

export default function AdminDashboard() {
  return (
    <Authorization>
      <AdminTemplate title={`掌編小説管理`}>
        <AdminNovel />
      </AdminTemplate>
    </Authorization>
  );
}
