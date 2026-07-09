import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
