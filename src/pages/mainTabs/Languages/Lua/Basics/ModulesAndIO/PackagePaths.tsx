import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
