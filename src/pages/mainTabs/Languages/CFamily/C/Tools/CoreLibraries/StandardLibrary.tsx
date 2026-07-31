import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
