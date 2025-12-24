import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const CustomComparatorsAndFunctors = () => {
  const markdownFilePath = 'Languages/CFamily/CPlusPlus/Advanced/AdvancedSTLUsage/CustomComparatorsAndFunctors';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Custom Comparators and Functors" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CustomComparatorsAndFunctors;
