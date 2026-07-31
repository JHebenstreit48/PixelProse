import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
