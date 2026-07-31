import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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