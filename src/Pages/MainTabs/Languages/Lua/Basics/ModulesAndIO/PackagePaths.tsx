import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const PackagePaths = () => {
  const markdownFilePath = 'Languages/Lua/Basics/ModulesAndIO/PackagePaths';

  return (
    <>
      <PageLayout>
        <PageTitle title="Package Paths" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default PackagePaths;
