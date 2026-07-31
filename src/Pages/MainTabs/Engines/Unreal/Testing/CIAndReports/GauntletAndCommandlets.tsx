import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

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
