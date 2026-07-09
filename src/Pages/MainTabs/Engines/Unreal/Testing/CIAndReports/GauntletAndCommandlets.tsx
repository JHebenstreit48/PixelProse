import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const GauntletAndCommandlets = () => {
  const markdownFilePath = 'Engines/Unreal/Testing/CIAndReports/GauntletAndCommandlets';

  return (
    <>
      <PageLayout>
        <PageTitle title="Gauntlet & Commandlets" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default GauntletAndCommandlets;
