import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const AdvancedSTLTechniques = () => {
  const markdownFilePath = 'Languages/CFamily/CPlusPlus/Advanced/AdvancedSTLUsage/AdvancedSTLTechniques';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Advanced STL Techniques" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default AdvancedSTLTechniques;
