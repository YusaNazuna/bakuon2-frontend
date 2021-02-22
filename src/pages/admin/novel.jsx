import Authorization from '@/components/organisms/Authorization';
import AdminTemplate from '@/components/templates/adminTemplate';

export default function AdminDashboard() {
  return (
    <Authorization>
      <AdminTemplate title={`掌編小説管理`}>hello</AdminTemplate>
    </Authorization>
  );
}
