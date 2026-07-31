import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

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
