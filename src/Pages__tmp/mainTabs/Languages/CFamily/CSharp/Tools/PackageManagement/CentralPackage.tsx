import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

const CentralPackageManagement = () => {
  const markdownFilePath = 'Languages/CFamily/CSharp/Tools/Packages/CentralPackageManagement';

  return (
    <PageLayout>
      <PageTitle title="C# Tools - Central Package Management" />
      <Notes filePath={markdownFilePath} />
    </PageLayout>
  );
};

export default CentralPackageManagement;