import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const NumbersAndMath = () => {
  const markdownFilePath = 'Languages/Lua/Basics/DataAndStructures/NumbersAndMath';

  return (
    <>
      <PageLayout>
        <PageTitle title="Numbers & Math" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default NumbersAndMath;
