import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

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
