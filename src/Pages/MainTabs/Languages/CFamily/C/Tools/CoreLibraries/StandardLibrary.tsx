import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
