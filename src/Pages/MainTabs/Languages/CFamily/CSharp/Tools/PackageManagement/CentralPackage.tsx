import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const CentralPackageManagement = () => {
  const markdownFilePath = 'Languages/CFamily/CSharp/Tools/Packages/CentralPackageManagement';

  return (
    <PageLayout>
      <Header />
      <PageTitle title="C# Tools - Central Package Management" />
      <Notes filePath={markdownFilePath} />
    </PageLayout>
  );
};

export default CentralPackageManagement;