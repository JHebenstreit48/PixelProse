import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const SetupAndGroups = () => {
  const markdownFilePath = 'Engines/Unity/Tools/Addressables/SetupAndGroups';

  return (
    <>
      <PageLayout>
        <PageTitle title="Setup & Groups" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default SetupAndGroups;
