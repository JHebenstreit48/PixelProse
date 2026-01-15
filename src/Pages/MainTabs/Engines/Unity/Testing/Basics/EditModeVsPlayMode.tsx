import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const EditModeVsPlayMode = () => {
  const markdownFilePath = 'Engines/Unity/Testing/Basics/EditModeVsPlayMode';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="EditMode vs PlayMode" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default EditModeVsPlayMode;
