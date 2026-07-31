import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

const StandardLibrary = () => {
  const markdownFilePath = 'Languages/CFamily/C/Tools/CoreLibraries/StandardLibrary';

  return (
    <>
      <PageLayout>
        <PageTitle title="Standard Library" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default StandardLibrary;
