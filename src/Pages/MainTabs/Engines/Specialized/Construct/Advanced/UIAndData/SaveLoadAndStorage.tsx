import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const SaveLoadAndStorage = () => {
  const markdownFilePath = 'Engines/Specialized/Construct/Advanced/UIAndData/SaveLoadAndStorage';

  return (
    <>
      <PageLayout>
        <PageTitle title="Save/Load & Storage" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default SaveLoadAndStorage;
