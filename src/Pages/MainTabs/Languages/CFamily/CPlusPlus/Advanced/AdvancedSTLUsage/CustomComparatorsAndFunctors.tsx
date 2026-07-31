import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

const CustomComparatorsAndFunctors = () => {
  const markdownFilePath = 'Languages/CFamily/CPlusPlus/Advanced/AdvancedSTLUsage/CustomComparatorsAndFunctors';

  return (
    <>
      <PageLayout>
        <PageTitle title="Custom Comparators and Functors" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CustomComparatorsAndFunctors;
